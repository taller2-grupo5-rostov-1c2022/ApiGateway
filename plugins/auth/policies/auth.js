const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

try {
  initializeApp({ credential: applicationDefault() });
} catch (error) {
  console.log(error);
}

module.exports = {
  name: "auth",

  policy: (actionParams) => {
    const that = this;
    return async (req, res, next) => {
      try {
        const auth = req?.headers?.authorization;

        if (!auth) {
          return res.status(400).send({
            error: "Invalid Authorization",
          });
        }
        const _auth = auth.trim().split(/ (.*)/s);

        const authType = _auth[0];
        const token = _auth[1];

        if (authType !== "Bearer") {
          return res.status(400).send({
            error: "Invalid Authorization",
          });
        }

        const { uid, role } = await getAuth().verifyIdToken(token);
        req.headers.uid = uid;
        req.headers.role = role ?? "listener";

        next();
      } catch (error) {
        return res.status(401).send({
          error: "Unauthorized",
        });
      }
    };
  },
};
