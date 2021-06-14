import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js'


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            array: [],
            
        };
    };
 
    
    componentDidMount(){
        this.resetArray();
    }

    resetArray() {

        const array = [];
        for (let i=0;i<300;i++){
            array.push(randomIntFromInterval(5,500));
        }
        this.setState({array});
        
    }
   
    mergeSort(){
        /*
        const sArr = sortingAlgorithms.mergeSort(this.state.array.slice());
        console.log(sArr.length)
        this.setState({array:sArr});
         */
        
        
        console.log(this.state.check);
        const animations = sortingAlgorithms.mergeSort(this.state.array.slice());
        const newAnimations=[];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for(let i=0;i<newAnimations.length;i++){
            const arrayBars= document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [bar1idx, bar2idx] = newAnimations[i];
                const bar1style= arrayBars[bar1idx].style;
                const bar2style= arrayBars[bar2idx].style;
                const color = i%3 ===0 ? 'red' : 'blueviolet';
                setTimeout( () => {
                     bar1style.backgroundColor=color;
                     bar2style.backgroundColor=color;
                }, i*2);
            }
            else{
                setTimeout( ()=>{
                    const [bar1idx, newHeight] = newAnimations[i];
                    const bar1style= arrayBars[bar1idx].style;
                    //const bar2style= arrayBars[bar2idx].style;
                    bar1style.height = `${newHeight}px` ;
                   
                }, i*2);
            }
            
        }

            //updating state as sorted array
            const sortedArray=[];
            const arrayBars= document.getElementsByClassName('array-bar');
            var len=this.state.array.length;
            for(let i=0;i<len;i++){
            sortedArray.push(arrayBars[i].height);
            }
            this.setState({array:sortedArray});
        
         
    }
    

    quickSort(){
        const animations = sortingAlgorithms.quickSort(this.state.array.slice());
        const newAnimations=[];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for(let i=0;i<newAnimations.length;i++){
            const arrayBars= document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [bar1idx, bar2idx] = newAnimations[i];
                const bar1style= arrayBars[bar1idx].style;
                const bar2style= arrayBars[bar2idx].style;
                const color = i%3 ===0 ? 'red' : 'blueviolet';
                setTimeout( () => {
                     bar1style.backgroundColor=color;
                     bar2style.backgroundColor=color;
                }, i*8);
            }
            else{
                setTimeout( ()=>{
                    console.log('else-block');
                    const [bar1idx, newHeight1] = newAnimations[i].first;
                    const [bar2idx, newHeight2] = newAnimations[i].second;
                    const bar1style= arrayBars[bar1idx].style;
                    const bar2style= arrayBars[bar2idx].style;
                    bar1style.height = `${newHeight1}px` ;
                    bar2style.height = `${newHeight2}px` ;
                    console.log(bar1style.height);
                }, i*8);
            }

        }

        //updating state as sorted array
        const sortedArray=[];
        const arrayBars= document.getElementsByClassName('array-bar');
        var len=this.state.array.length;
        for(let i=0;i<len;i++){
            sortedArray.push(arrayBars[i].height);
        }
        this.setState({array:sortedArray});


    }

    heapSort(){

        const animations = sortingAlgorithms.heapSort(this.state.array.slice());
        const newAnimations=[];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for(let i=0;i<newAnimations.length;i++){
            const arrayBars= document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [bar1idx, bar2idx] = newAnimations[i];
                const bar1style= arrayBars[bar1idx].style;
                const bar2style= arrayBars[bar2idx].style;
                const color = i%3 ===0 ? 'red' : 'blueviolet';
                setTimeout( () => {
                     bar1style.backgroundColor=color;
                     bar2style.backgroundColor=color;
                }, i*2);
            }
            else{
                setTimeout( ()=>{
                    console.log('else-block');
                    const [bar1idx, newHeight1] = newAnimations[i].first;
                    const [bar2idx, newHeight2] = newAnimations[i].second;
                    const bar1style= arrayBars[bar1idx].style;
                    const bar2style= arrayBars[bar2idx].style;
                    bar1style.height = `${newHeight1}px` ;
                    bar2style.height = `${newHeight2}px` ;
                    console.log(bar1style.height);
                }, i*2);
            }

        }

        //updating state as sorted array
        const sortedArray=[];
        const arrayBars= document.getElementsByClassName('array-bar');
        var len=this.state.array.length;
        for(let i=0;i<len;i++){
            sortedArray.push(arrayBars[i].height);
        }
        this.setState({array:sortedArray});

    }

    bubbleSort(){

        const animations = sortingAlgorithms.bubbleSort(this.state.array.slice());
        const newAnimations=[];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        for(let i=0;i<newAnimations.length;i++){
            const arrayBars= document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [bar1idx, bar2idx] = newAnimations[i];
                const bar1style= arrayBars[bar1idx].style;
                const bar2style= arrayBars[bar2idx].style;
                const color = i%3 ===0 ? 'red' : 'blueviolet';
                setTimeout( () => {
                     bar1style.backgroundColor=color;
                     bar2style.backgroundColor=color;
                }, i*2);
            }
            else{
                setTimeout( ()=>{
                    console.log('else-block');
                    const [bar1idx, newHeight1] = newAnimations[i].first;
                    const [bar2idx, newHeight2] = newAnimations[i].second;
                    const bar1style= arrayBars[bar1idx].style;
                    const bar2style= arrayBars[bar2idx].style;
                    bar1style.height = `${newHeight1}px` ;
                    bar2style.height = `${newHeight2}px` ;
                }, i*2);
            }

        }

        //updating state as sorted array
        const sortedArray=[];
        const arrayBars= document.getElementsByClassName('array-bar');
        var len=this.state.array.length;
        for(let i=0;i<len;i++){
            sortedArray.push(arrayBars[i].height);
        }
        this.setState({array:sortedArray});

    }

    testSortingAlgorithms(){
        for(let j=0;j<100;j++){
        const array = [];
        const len=randomIntFromInterval(1,1000)
        for (let i=0;i<len;i++){
            array.push(randomIntFromInterval(5,600));
        }
        const jsSortedArray = array.slice().sort((a,b)=>a-b);
        const SortedArray = sortingAlgorithms.heapSort(array.slice());
        console.log(arraysEqual(jsSortedArray,SortedArray));
    }
    }


    render(){
        const {array} =this.state;

        return (
        <div className="main">   
            <div className="buttons_body">
                <p className="project_name">Sorting Visualizer</p>
                <button className="button" onClick={() => this.resetArray() }>Generate New Array</button>
                <button className="button" onClick={() => this.mergeSort() }>Merge Sort</button>
                <button className="button" onClick={() => this.quickSort() }>Quick Sort</button>
                <button className="button" onClick={() => this.heapSort() }>Heap Sort</button>
                <button className="button" onClick={() => this.bubbleSort() }>Bubble Sort</button>
            </div>

            <div className="array-container">
            {array.map((value,idx)=>(
                <div 
                className="array-bar" 
                key={idx} 
                style={{height: `${value}px`}}> </div>
            ))}
            </div>

        </div> 
        );
    }

}


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function arraysEqual(array1,array2){
    
    for(let i=0;i<array1.length;i++){
    if(array1[i]!==array2[i]){
        return false;
    }
}
    return true;
}