import { logging } from 'near-sdk-as';

//view function
export function hello() {
    logging.log("Hi, there! You have written your first Smart Contract on NEAR!");
    return true;
  }