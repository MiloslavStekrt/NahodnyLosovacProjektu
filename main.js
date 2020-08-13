const apka = new Vue({
    el: "main",
    data:{
        area:"",
        projekty:[],
        vybrane_projekty:[],
        odstranene_projekty:[],
        nahodny_projekt:'',
        projekty_can : false,
        index:-1,
    },
    methods:{
        generovat(){
            this.projekty = this.area.split(", ");
            this.projekty_can = true;
        },
        select(){
            this.vybrane_projekty.push(this.nahodny_projekt);
            this.projekty.splice(this.index, 1);
            this.nahodny_projekt='';
        },
        deleter(){
            this.odstranene_projekty.push(this.nahodny_projekt)
            this.projekty.splice(this.index, 1);
            this.nahodny_projekt='';
        },
        vyber_nahodne(){
            var NahodnyProjekt = Math.floor(Math.random() * this.projekty.length);
            this.index = NahodnyProjekt;
            if(this.projekty[NahodnyProjekt]){
                this.nahodny_projekt=this.projekty[NahodnyProjekt];
            }
            else{
                alert("Zadne projekty uz nejsou!!");
                nahodny_projekt = '';
                projekt_can = false;
            }
        }
    }
})