// Proposal deck collaborative comments - Google Apps Script backend.
// Bind to a Google Sheet, deploy as a Web App ("Anyone" access).
// Sheet header row (row 1):
// id | deckId | slideId | author | text | parentId | resolved | createdAt | anchor | anchorXY
var SHEET_NAME = 'comments';

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['id', 'deckId', 'slideId', 'author', 'text', 'parentId', 'resolved', 'createdAt', 'anchor', 'anchorXY']);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  var deckId = (e && e.parameter && e.parameter.deckId) || '';
  var sh = sheet_();
  var rows = sh.getDataRange().getValues();
  var out = [];
  var resolvedIds = {};
  for (var i = 1; i < rows.length; i++) {
    var r = rows[i];
    if (r[1] === deckId && !r[5] && r[6] === true) {
      resolvedIds[r[0]] = true;
    }
  }
  for (var j = 1; j < rows.length; j++) {
    var row = rows[j];
    if (row[1] !== deckId) continue;
    var isMain = !row[5];
    if (isMain && row[6] === true) continue;
    if (!isMain && resolvedIds[row[5]]) continue;
    out.push({
      id: row[0], slideId: row[2], author: row[3], text: row[4],
      parentId: row[5], resolved: row[6] === true, createdAt: row[7],
      anchor: row[8] || '', anchorXY: row[9] || ''
    });
  }
  return json_(out);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var body = JSON.parse(e.postData.contents);
    var sh = sheet_();
    if (body.action === 'add' || body.action === 'reply') {
      var id = Utilities.getUuid();
      sh.appendRow([
        id,
        body.deckId,
        body.action === 'add' ? body.slideId : '',
        body.author || 'anon',
        body.text || '',
        body.action === 'reply' ? body.parentId : '',
        false,
        new Date().toISOString(),
        body.action === 'add' ? (body.anchor || '') : '',
        body.action === 'add' ? (body.anchorXY || '') : ''
      ]);
      return json_({ ok: true, id: id });
    }
    if (body.action === 'resolve') {
      var rows = sh.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        if (rows[i][0] === body.id && rows[i][1] === body.deckId) {
          sh.getRange(i + 1, 7).setValue(true);
          break;
        }
      }
      return json_({ ok: true });
    }
    return json_({ ok: false, error: 'unknown action' });
  } finally {
    lock.releaseLock();
  }
}
