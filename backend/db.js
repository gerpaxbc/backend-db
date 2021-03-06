const admin = require('firebase-admin')

const serviceAccount = ({
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCbfA6QQ3a0+htB\nsj4aI+owYepN6cU63pucEycPz1NpXEPYWkbWfKXOFeKXX+QQCiI4nwe4ZfP/ved2\nZXnB09gJL+3h79yLumvZo9gW7wcUfjIn3iAliIYAq4W3BLZ8CuDuazcPd0BTcZty\nOOp/DCajch1emNulOgmaIQLvOV31WOrsAW30YsZ83LbVNg3b6TSk3lpH4iSYzkL3\nUheBsR5QVA0LWUjQ+q6EJ8PZI8dwtdf91IsqSFld+MqOywXFs9j2tuhXCpEEs2n/\nG5VXLqbgT5odGiWkdHLen50nNUuv5HtsObs7iUBB0jTBU25C9y+3yOIqKIVkDBJx\nHJXAIhSJAgMBAAECggEAAVjGE4UnaRKQMTXRszjuarQzwFsEWf8wSojL73zJ6da3\nwQ7/IBUnpoJVWnRP2Ge4u37SeqFqHKP7dkYTaOoPK/0zSqALlquVtZE6v5rFwpgD\n595/rsjg8u6JaPgXJeSTkDJzi/m/dTmTBslBbA+h4gvh/z4ZtkkAvkoHlCTjZcr3\nljYRge1rMMRSAcgxxCI4JSvwn/b/rvUnkHGhro8Z8dxiOnyU23iPTjYqZTjnv4Ff\nA8Rc6g6XdLhvVqvYGxa09OnXV4M7HeGqpMLjwjKLgRL8OkvzRqEMHsU1kbbboDa+\n9qwg5Qghub0OpdYXu+m0mEYcc7jZFdmIqaBy26WVNQKBgQDMkvuuQvmSVbQq3IZo\nAvv9+CGKWjkiR49WeuUyL8yEuyez8ryGNktrZXEuBVc+V8EhkftWZzlXeGpBgzZg\n7D3nQ8dLgrLXZhOw/djyqO2HMwQivug0qyz4sw7J4JGXeDTdYquPSVdXBOaJOYZo\ntr5OCKlvckZGUazmG9280AqLQwKBgQDCkgADVxmhNCgMJpgZv63NRbpZN1Z9c5et\n+4Kiyoy8BhFmYg4/zLRS205wONSqlauSSA02E2dQ+eZMHdZvg9xxpQwPENCaAEf/\ndrkBfsQKDUffaiQA8oTsC//pQe/qJq6iqLSzA57atxSvL62lyht9bZB22iwkTN5q\nfoi870q2QwKBgQCRQy2Dp/sfdcvhQ4YNBVF6HV9zpm07ciTN+6YT5O0MsviWRp6n\njpYvRHEBhLlWg2mYNNiLmfCVs+N/cXSDjjzGotI5RC1J1inVW+tZI6rGfetJ4NVx\n0Lq2Pi8aGmRHcgvXx+CadjGWkNxCRJ60bE7lijEF+db8x7JGEzN4hyF1kQKBgQCN\nsqYvyI7xx3oi3ziGCAIbLFy5/IMQec5M9o384GX9yK2DUoXuELaCYRSOxdSbJsT8\nk1yLtTXY0yXU6SXxsKYqXXiawDQq82l7soqpfBho+aMOIc52oigLf/GvfkWq0OD9\ntL9kX46g2hRGQQLFapr6jYBYDit3hEO2atBKSDqw4QKBgGtrGYchraZOs6iKc6Vo\niDuyMwkeuSsSbIBW1PtOLOVaB35HBtMOb0UfXoLavatIB+FHHwigdynHjM2U7iT+\nMKFG2Azg2p5EnWsrrE/2DsYYzMlnn9T8ZP0Kt64QqdumoCXuDyDDcGb/pcr3RmCq\nqGxasjPk/lzuIwfR3P0FZcJ0\n-----END PRIVATE KEY-----\n",
    "client_email": process.env.CLIENT_EMAIL,
    "client_id": process.env.CLIENT_ID,
    "auth_uri": process.env.AUTH_URI,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER,
    "client_x509_cert_url": process.env.CLIENT_X509
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore()
module.exports = db
