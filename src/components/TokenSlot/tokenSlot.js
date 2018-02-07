import Vue from 'vue';
import template from './tokenSlot.html';

// import '@/assets/css/styles.css';
// import './tokenSlot.scss';

export default Vue.extend({
  template,

  props: {

    row: {
      type: Number,
      required: true
    },

    col: {
      type: Number,
      required: true
    },

    // value: 0
    value: {
      // type: Object,
      // type: String,
      type: Number,      
      // required: true
      required: false      
    }
  },

  // computed: {
  //   classObject: function () {
  //     // let occupancy = 0;
  //     let occupancyClass = '';
  //     if (this.value == 1) {
  //       occupancyClass = 'p1';
  //     }
  //     else if (this.value == 2) {
  //       occupancyClass = 'p2';
  //     }

  //     occupancyClass = 'p1';

  //     console.log('occupancyClass', occupancyClass);
  //     return {
  //       // active: this.isActive && !this.error,
  //       // 'text-danger': this.error && this.error.type === 'fatal'
  //       // p1: this.playe this.isActive && !this.error,
  //       // 'text-danger': this.error && this.error.type === 'fatal'
  //       occupancyClass
  //     }
  //   }
  // },

  methods: {

    slotClick() {
      console.log('slotClick()');
      // console.log('props', this.props);
      console.log('props', this.row + ',' + this.col);
      // this.$emit(msg, popout.item.id);
      // this.$emit('increment')
      // this.$emit('slotClick', [this.row, this.col]);
      this.$emit('tokenClick', [this.row, this.col]);      
    }

  },

  created() {
      // console.log('created()');

      // console.log('this.test:', this.test);
      // console.log('this:', this);
      
      // console.log('this.$data:', this.$data);
      console.log('this.props:', this.props);
      // console.log('done()');
  }
});
