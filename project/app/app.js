const app = new Vue({
    el:'#app',
    data:{
        width:'',
        height:'',
        picture: '',
        errors:{
            width:false,
            height:false
        }
    },

    methods: {
        processForm: function(){
            console.log({width: this.width, height:this.height});
            this.picture = `https://picsum.photos/id/${this.width}/800/400`;
        },

        validateWidth: function(){
            console.log("yes");
            console.log(window.isValidWidth(this.width));
            this.errors.width = window.isValidWidth(this.width);
        }
    }
});

function isValidWidth(width){
    if (width > 0 && width <=1084){
        return false;
    }else{
        return true;
    }
}

