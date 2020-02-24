var body = $response.body;
body = '\/*\n@supported 6\n*\/\n' + body;

$done(body);
