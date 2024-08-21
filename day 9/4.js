const gamedata = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '', 
    '',
]
let player = 'x'

document.getElementById('resetbtn').addEventListener('click',()=>{
    for(let i=0;i<gamedata.length;i++){
        gamedata[i] = ''
    }
    player = 'x'
    render()
})

function checkdraw(){
    for(let i=0;i<gamedata.length;i++){
        if(gamedata[i]=='') return false
    }
}

function checkwin(){
    for(let i=0;i<=6;i+=3){
        if(
            gamedata[i] !='' &&
            gamedata[i]==gamedata[i+1] &&
            gamedata[i+1]==gamedata[i+2]
        )return gamedata[i]
    }

   for(let i=0;i<=2;i++){
        if(
            gamedata[i] !='' &&
            gamedata[i]==gamedata[i+3] &&
            gamedata[i+3]==gamedata[i+6]
        )return gamedata[i]
    }

     if(
        gamedata[0] !='' &&
        gamedata[0]==gamedata[4] &&
        gamedata[4]==gamedata[8]
    )return gamedata[0]

    if(
        gamedata[2] !='' &&
        gamedata[2]==gamedata[4] &&
        gamedata[4]==gamedata[6]
    )return gamedata[2]

    return''

    }


function changeplayer(){
    if(player=='x'){
        player='o'
    }else{
        player='x'
    }
    
}
function render(){
    for(let i=0;i<gamedata.length;i++){
        document.getElementById(i).innerText = gamedata[i]
        
    }document.getElementById('player-title').innerText = player
}

function modifycell(num){
    if(gamedata[num]!='') return;
    gamedata[num] = player
    changeplayer()
}
function main(){
    for(let i=0;i<9;i++){
        document.getElementById(i).addEventListener('click',()=>{
         modifycell(i)
         render()
         let result = checkwin()
         if(result!=''){
            alert('${result} has won')
         }else{
            let draw = checkdraw()
            if(draw==true){
                alert('draw has happen')
            }
         }
         
        })
    }
}
main()