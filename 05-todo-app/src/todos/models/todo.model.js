import { v4 as uuidv4 } from 'uuid';

export class Todo {
  /**
   * Cre el objeto Todo
   * @param {String} descrption Descripción del elemento
   */
  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
