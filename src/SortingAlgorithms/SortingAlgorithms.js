export function mergeSort(array){
    const animations=[];
    if(array.length<=1) return array;
    var arr=array.slice();
    mergeSortHelper(arr,0,array.length-1, animations);

    return animations;
}



function mergeSortHelper(arr,l, r,animations){
    if(l>=r){
        return ;//returns recursively
    }
    var m =Math.floor((l+r)/2);
    mergeSortHelper(arr,l,m,animations);
    mergeSortHelper(arr,m+1,r,animations);
    merge(arr,l,m,r,animations);
    
}


function merge(arr, l, m, r,animations)
{


    var X = new Array(r-l+1).fill(0);

    var i = l;
 
    var j = m+1;
 
 
    var k = 0;
 
    while (i <=m && j <=r) {

        var animation={};
        if (arr[i] <= arr[j]) {
            animation.comparison = [i,j];
            animation.swap = [k+l,arr[i]];
            X[k] = arr[i];
            i++;
        }
        else {
            animation.comparison = [i,j];
            animation.swap = [k+l,arr[j]];
            X[k] = arr[j];
            j++;
        }
        animations.push(animation);
        k++;
    }
 

    while (i <= m) {
        animations.push({
            comparison : [i,i],
            swap : [k+l,arr[i]],
        });
        X[k] = arr[i];
        i++;
        k++;
    }
 
 
    while (j <=r) {
        animations.push({
            comparison : [j,j],
            swap : [k+l,arr[j]],
        });

        X[k] = arr[j];
        j++;
        k++;
    }

    var idx=l;
    for(i=0;i<k;i++){
        arr[idx]=X[i];
        idx++;
    }
}


//bubble sort 
export function bubbleSort(array){
    const animations=[];
    if(array.length<=1) return array;
    var arr=array.slice();
    bubbleSortHelper(arr,animations,arr.length);
    return animations;
}

function bubbleSortHelper(arr,animations,n){
    
    var i;
    var j;
    for(i=0;i<n;i++){
        for(j=0;j<(n-1)-i;j++){
            var animation={};
            animation.comparison=[j,j+1];
            animation.swap ={}
            if(arr[j]>arr[j+1]){
                animation.swap.first=[j,arr[j+1]];
                animation.swap.second=[j+1,arr[j]];
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
            else{
                animation.swap.first=[j,arr[j]];
                animation.swap.second=[j+1,arr[j+1]];
            }
            animations.push(animation);
        }
    }
}


//Implementing quicksort
export function quickSort(array){
    const animations=[];
    if(array.length<=1) return array;
    var arr=array.slice();
    quickSortHelper(arr,0,array.length-1, animations);

    return animations;
}

function quickSortHelper(arr, si, ei, animations){

  if(si>=ei){
      return;
  }

  var c= partition(arr,si,ei,animations);
  quickSortHelper(arr,si,c-1,animations);
  quickSortHelper(arr,c+1,ei,animations);

}

function partition(arr, si, ei, animations){
    var cnt=si;
    for(let i=si+1;i<=ei;i++){
        if(arr[i]<=arr[si]){
            cnt++;
        }
    }
    var animation={};
    animation.comparison=[si,cnt];
    animation.swap ={}
    animation.swap.first=[si,arr[cnt]];
    animation.swap.second=[cnt,arr[si]];
    animations.push(animation);
    var temp=arr[cnt];
    arr[cnt]=arr[si];
    arr[si]=temp;
    var x=arr[cnt];
    var i=si;
    var j=ei;
    while(i<cnt&&j>cnt){
        
        if(arr[i]<=x){
            i++;
        }
        else if(arr[j]>x){
            j--;
        }

        else{
            animation={};
            animation.comparison=[i,j];
            animation.swap ={};
            animation.swap.first=[i,arr[j]];
            animation.swap.second=[j,arr[i]];
            animations.push(animation);
            var temp1=arr[i];
            arr[i]=arr[j];
            arr[j]=temp1;
            i++;
            j--;
        }
        
    }
    return cnt;
}


//Implementing Heap Sort

export function heapSort(array){
    const animations=[];
    if(array.length<=1) return array;
    var arr=array.slice();
    heapSortHelper(arr,array.length, animations);
    return animations;
}

function heapSortHelper(arr,n, animations){

    var start=Math.floor((n/2)-1);

    for(let i=start;i>=0;i--){
        heapify(arr,n,i,animations);
    }

    for(let i=0;i<n;i++){
        var animation={};
        animation.comparison=[0,n-1-i];
        animation.swap ={};
        animation.swap.first=[0,arr[n-1-i]];
        animation.swap.second=[n-1-i,arr[0]];
        animations.push(animation);
        var temp=arr[0];
        arr[0]=arr[n-1-i];
        arr[n-1-i]=temp;
        heapify(arr,n-1-i,0,animations);
    }

}


function heapify(arr, n, i,animations){
    var largest=i;
    var left=2*i+1;
    var right=2*i+2;
    if(left<n&&arr[left]>arr[largest]){
         largest=left;
    }
    if(right<n&&arr[right]>arr[largest]){
          largest=right;
    }

    if(largest!==i){

        var animation={};
        animation.comparison=[i,largest];
        animation.swap ={};
        animation.swap.first=[i,arr[largest]];
        animation.swap.second=[largest,arr[i]];
        animations.push(animation);
        var temp=arr[largest];
        arr[largest]=arr[i];
        arr[i]=temp;
        heapify(arr,n,largest,animations);
    }
}