import Vue from 'vue';
import template from './game.html';
import tokenSlot from '../TokenSlot/tokenSlot';

import './game.scss';

const ROW_COUNT = 6;
const COL_COUNT = 7;

export default Vue.extend({
  template,
  components: {
    'tokenSlot': tokenSlot
  },
  methods: {

    init() {
    
      console.log('init()');
      // console.log('this.props:', this.props);
      
      this.slots = new Array(ROW_COUNT);
      for(let r = 0; r < ROW_COUNT; r++) {
        this.slots[r] = new Array(COL_COUNT);
      }
      console.log('slots:', this.slots);

      this.winner = 0;
      this.player = 1; 
    },

    winCheck(r,c) {
          
      console.log("Win Check: [" + r + "," + c + "]");
      
      const player = this.slots[r][c];
      console.log('player:', player);
      
      let offset;

      // Horizontal Check
      let leftCount = 0, rightCount = 0;

      offset = 1;

      // console.log("Left Check");
      
      while (c-offset >= 0 && this.slots[r][c-offset] == player) {
        leftCount++;
        offset++;
      }
      
      offset = 1;
      
      // console.log("Right Check");
      
      while (c+offset < COL_COUNT && this.slots[r][c+offset] == player) {
        rightCount++;
        offset++;
      }
      
      if (leftCount + rightCount >= 3) {
        console.log("Horizontal Winner");
        return player;
      }
      
      // Vertical Check
      let aboveCount = 0, belowCount = 0;

      offset = 1;

      // console.log("Above Check");
      
      while (r-offset >= 0 && this.slots[r-offset][c] == player) {
        aboveCount++;
        offset++;
      }
      
      offset = 1;
      
      // console.log("Below Check");
      
      while (r+offset < ROW_COUNT && this.slots[r+offset][c] == player) {
        belowCount++;
        offset++;
      }
      
      if (aboveCount + belowCount >= 3) {
        console.log("Vertical Winner");
        return player;
      }
      
      // Diagonal Checks
      
      // TopLeft to BottomRight Check
      let topLeftCount = 0, bottomRightCount = 0;

      offset = 1;

      // console.log("TopLeft Check");
      
      while ((r-offset >= 0 && c-offset >= 0) && this.slots[r-offset][c-offset] == player) {
        topLeftCount++;
        offset++;
      }
      
      offset = 1;
      
      // console.log("BottomRight Check");
      
      while ((r+offset < ROW_COUNT && c+offset < COL_COUNT) && this.slots[r+offset][c+offset] == player) {
        bottomRightCount++;
        offset++;
      }
      
      if (topLeftCount + bottomRightCount >= 3) {
        console.log("Diagonal Winner");
        return player;
      }
      
      // TopRight to BottomLeft Check
      let topRightCount = 0, bottomLeftCount = 0;

      offset = 1;

      // console.log("TopRight Check");
      
      while ((c+offset < COL_COUNT && r-offset >= 0) && this.slots[r-offset][c+offset] == player) {
        topRightCount++;
        offset++;
      }
      
      offset = 1;
      
      // console.log("BottomLeft Check");
      
      while ((r+offset < ROW_COUNT && c-offset >= 0) && this.slots[r+offset][c-offset] == player) {
        bottomLeftCount++;
        offset++;
      }
      
      if (topRightCount + bottomLeftCount >= 3) {
        console.log("Diagonal Winner");
        return player;
      }

    },

    // slotClick(row,col) {
    slotClick(slotInfo) {
      console.log('slotClick()', slotInfo);
      // const row = slotInfo[0];
      const col = slotInfo[1];
      // console.log('row,col', row, col);
      
      const playAttemptResult = this.play(col);
      console.log('playAttemptResult:', playAttemptResult);

      this.$forceUpdate();  // temp
    },

    resetClick() {
      console.log('resetClick');
      this.init();
    },

    GetTurnMessage(player) {
      return "Player " + player + " has a turn";
    },
    
    GetWinMessage(player) {
      return "Player " + player + " wins!";
    },

    GetGameMessage() {
      return this.player ? "Player " + this.player : "Player " + this.winner + " Wins!";
    },

    play(col) {
      console.log('play - col:', col);

      if (this.player == 0) {
        // return MESSAGE_GAME_OVER;
        return 'game over';        
      }
      
      // let nextSlot = COLUMN_FULL;
      let nextSlot = -1;      

      // from the bottom -> up
      for (let r = ROW_COUNT-1; r >= 0; r--) {
        if (this.slots[r][col] == 0 || this.slots[r][col] == null) {
            nextSlot = r;
            break;
        }
      }
      
      // if (nextSlot == COLUMN_FULL) {
      if (nextSlot == -1) {      
          // return MESSAGE_COLUMN_FULL;
          return 'full';          
      }
      
      // add it
      // slots[nextSlot,col] = player;
      // this.slots[nextSlot,col] = player;
      this.slots[nextSlot][col] = this.player;
      console.log('this.slots[nextSlot][col]:', this.slots[nextSlot][col]);
      
      // PrintSlots();
      
      if (this.winCheck(nextSlot, col) > 0) {    
        this.winner = this.player;
        this.player = 0;
        return this.GetWinMessage(this.winner);
      }
      
      const turnMsg = this.GetTurnMessage(this.player);
      
      // change turn
      this.player = (this.player == 1) ? 2 : 1;
      
      return turnMsg;
    }

  },
  props: {
    // ...
  },
  events: {
      // eventName: function (argument) {
      slotClick: function (row,col) {
          console.log('slotClick()', row, col);
      }
  },
  data() {  
    return {
      // test: 'mike test',
      player: 1,
      winner: 0,
      // slots: [ROW_COUNT][COL_COUNT]
      slots: [[]]
      // slots: []      
      // slots: [ROW_COUNT]
      // slots: {
      //   rows: [
      //     { cols: [] }
      //   ]
      // }
    }
  },
  beforeMount() {
      console.log('beforeMount()');
  },
  created() {
      console.log('created()');
      this.init();
  }
});
