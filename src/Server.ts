import express = require("express");

class Server {
  public app: express.Application;
  PORT: String;
  constructor(config) {
    this.app = express();
    this.PORT = config.PORT;
  }

  bootStrap() { 
    this.setupRoutes();
    this.initBodyParser();
  }


  initBodyParser(){
    
  }

  setupRoutes() {
    this.app.get(
      "/health-check",
      (req: express.Request, res: express.Response) => {
        req && res.status(200).send("I am ok");
      }
    );
  }

  run() {
    this.app.listen(this.PORT, () => {
      try{
        console.log(`Server started at PORT: ` + this.PORT);
      }catch(err){
          console.log(`Server Failed to start `);
        }
    });
  }
}

export default Server;
