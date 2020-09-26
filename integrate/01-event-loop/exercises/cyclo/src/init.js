'use strict';

import { Board } from '../../../board.js';
import { Segment } from './segment.js';


const newBoard = new Board(Segment, 10, 10);
const boardView = newBoard.render()
debugger;
document.getElementById('root').appendChild(boardView);

