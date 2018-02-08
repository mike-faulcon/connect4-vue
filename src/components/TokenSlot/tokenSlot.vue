<template>
    <div 
        class="tokenSlot" 
        v-bind:class="{ p1: value == 1, p2: value == 2 }" 
        @click="slotClick">
    </div>
</template>

<script>

    module.exports = {
      
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

      methods: {

        slotClick() {
          console.log('slotClick()');
          // console.log('props', this.row + ',' + this.col);
          this.$emit('tokenClick', [this.row, this.col]);      
        }

      },

      created() {
          // console.log('created()');
          // console.log('this.$data:', this.$data);
          console.log('this.props:', this.props);
          // console.log('done()');
      }
    }

</script>