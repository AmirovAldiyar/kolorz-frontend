const router = require('express').Router();

router.get("/getInfo", function (request, response) {
    response.json([{
        name: "Possible level of coolness",
        data: [0, 0, 31, 0]
      },
      {
        name: "Noelliya1",
        data: [0, 0, 44, 0]
      },
      {
          name: "Aldiyar",
          data: [0, 0, 44, 0]
      },
      {
          name: "Arina",
          data: [0, 0, 44, 0]
      }])
})

module.exports = router;
