import React from 'react';
import '../../css/common.css';
import './Home.css';

class Home extends React.Component {
    constructor(props){
        super()
        this.state={
            map:[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ],
            max:2
        }
    }
    randomPutNum=(f)=>{
        let data=[]
        data=this.getSpace()
        if(data.length===0){
            alert("finished!:"+this.state.max)
            return 
        }
        let k = data[(new Date().getTime())%data.length]
        let i=parseInt(k/4)
        let j=k%4
        if(f)console.log(i,j)
        let num = this.state.max>16?4:2
        if(this.state.map[i][j]===0)
            this.setItem(i,j,num)
        else{
            this.randomPutNum(false)
        }
    }
    getSpace=()=>{
        let data=[]
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(this.state.map[i][j]===0)
                    data.push(i*4+j)
            }
        }
        return data
    }
    componentDidMount(){
        this.randomPutNum(true)
        window.addEventListener("keydown",e=>{
            switch(e.key){
                case "ArrowDown":
                    this.handleMapDown()
                    break
                case "ArrowUp":
                    this.handleMapUp()
                    break
                case "ArrowLeft":
                    this.handleMapLeft()
                    break
                case "ArrowRight":
                    this.handleMapRight()
                    break
                default:
                    console.log(e.key)
                    break
            }
            this.randomPutNum(true)
        })
    }
    handleMapRight=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[i][0],map[i][1],map[i][2],map[i][3]]
            let s=3
            let check=-1
            for(let k=0;k<4;k++){
                let f=3-k
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]*=2
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s-=1
                }
            }
            for(let l = s;l>=0;l--){
                Data[l]=0
            }
            map[i][0]=Data[0]
            map[i][1]=Data[1]
            map[i][2]=Data[2]
            map[i][3]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    handleMapLeft=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[i][0],map[i][1],map[i][2],map[i][3]]
            let s=0
            let check=-1
            for(let k=0;k<4;k++){
                let f=k
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]*=2
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s+=1
                }
            }
            for(let l = s;l<4;l++){
                Data[l]=0
            }
            map[i][0]=Data[0]
            map[i][1]=Data[1]
            map[i][2]=Data[2]
            map[i][3]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    handleMapUp=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[0][i],map[1][i],map[2][i],map[3][i]]
            let s=0
            let check=-1
            for(let k=0;k<4;k++){
                let f=k
                
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]*=2
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s+=1
                }
            }
            for(let l = s;l<4;l++){
                Data[l]=0
            }
            map[0][i]=Data[0]
            map[1][i]=Data[1]
            map[2][i]=Data[2]
            map[3][i]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    handleMapDown=()=>{
        let {map,max}=this.state
        for(let i = 0;i < 4;i++){
            let Data=[map[0][i],map[1][i],map[2][i],map[3][i]]
            let s=3
            let check=-1
            for(let k=0;k<4;k++){
                let f=3-k
                
                if(Data[f]!==0){
                    if(check!==-1&&Data[f]===Data[check]){
                        Data[check]*=2
                        if(Data[check]>max){
                            max=Data[check]
                        }
                        Data[f]=0
                    }
                    Data[s]=Data[f]
                    check=s
                    s-=1
                }
            }
            for(let l = s;l>=0;l--){
                Data[l]=0
            }
            map[0][i]=Data[0]
            map[1][i]=Data[1]
            map[2][i]=Data[2]
            map[3][i]=Data[3]
        }
        this.setState({map:map,max:max})
    }
    itemToDiv=(item)=>(
        <div className="ccFlexColumn" style={{width:56,height:56,background:"pink",borderRadius:12}}>
            {item===0?null:item}
        </div>
    )
    setItem(i,j,k){
        let {map}=this.state
        map[i][j]=k
        this.setState({map:map})
    }
    lineToDiv=(item)=>(
        <div className="bcFlexRow" style={{width:240,height:56}}>
            {item.map(this.itemToDiv)}
        </div>
    )
    render(){
        return (
            <div className="OutSide ccFlexColumn" style={{background:"#efefef"}}>
                <div className="bcFlexColumn" style={{width:240,height:240,background:"#ffffff",borderTopLeftRadius:20,borderTopRightRadius:20,padding:16/3}}>
                    {this.state.map.map(this.lineToDiv)}
                </div>
                <div className="ccFlexColumn" style={{width:240,height:40,background:"#ffffff",borderBottomLeftRadius:20,borderBottomRightRadius:20,padding:16/3}}>
                    最大值：{this.state.max}
                </div>
            </div>
          );
    }
}
export default Home;