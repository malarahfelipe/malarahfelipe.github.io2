class Config {

  private env: string;
  private config: any;

  constructor() {
    this.env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
    this.config = this.readConfigFromFile(this.env);
  }

  public getAPIAddress(): string {
    return this.config.API_ADDRESS;
  }

  private readConfigFromFile(env: string): any {
    let contents: any;
    try {
      contents = require(`raw-loader!../../env/${env}.env`);
    } catch (error) {
      throw new Error(`There is no config file for ${env} environment.`);
    }

    const json = JSON.parse(contents.default);

    return json;
  }

}

export default new Config();
