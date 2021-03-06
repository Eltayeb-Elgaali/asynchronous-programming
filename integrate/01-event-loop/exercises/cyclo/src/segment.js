'use strict';

import { logger } from '../../../../lib/logger.js';

export class Segment {

  isChanging = true
  timeoutId = null
  delayFactor = 500
  msDelay = 0
  innerText = ''
  emptyText = '  \n  \n  '
  isDisplayed = true
  coordinates = {}

  constructor(x, y) {
    this.msDelay = this.delayFactor + (x * 5);
    this.innerText = '  \n' + y + '\n\n  ';
    // 2 lines are missing
    this.coordinates.x = x;
    this.coordinates.y = y;


  }

  handleClick(view) {
    if (this.isChanging) {
      // 1 line is missing
      clearTimeout(this.timeoutId);

    } else {
      // 1 line is missing
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
    };
    // 1 line is missing
    this.isChanging = !this.isChanging;

    logger.push({
      coordinates: `${this.coordinates.x}, ${this.coordinates.y}`,
      isChanging: this.isChanging,
      isDisplayed: this.isDisplayed
    });
  }

  timeoutCallback(view) {
    if (this.isChanging) {
      // reverse isDisplayed
      this.isDisplayed = !this.isDisplayed

      // update the view's innerText
     
      view.innerText = this.isDisplayed ? this.emptyText : this.innerText
      

      // set a timeout and capture the id
      this.timeoutId = setTimeout(this.timeoutCallback.bind(this, view), this.msDelay);
      //this.isChanging = !this.isChanging;
     
    };
  }

  render() {
    const container = document.createElement('div');
    container.style = 'height: 100%;'
      + 'width: 100%;'
      + 'display: flex;'
      + 'align-items: center;'
      + 'justify-content: center;';
    // set the container's innerText
    container.innerText = this.innerText;
    // attach the clickHandler to the container
    container.onclick = this.handleClick.bind(this, container);
    // start a timeout and capture the id
    this.timeoutId = setTimeout(this.timeoutCallback.bind(this, container), this.msDelay)

    return container;
  }

}
