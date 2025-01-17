//kernel区域 算子区域 所有两步以上的数学运算放在此区域 防止过多重复
const ori_x=[1,0] // x 正半轴方向

/**
 * kernel_1 : (a-b)^2 
 * @param {number} a - a
 * @param {number} b - b 
 * @return {number} The result value.
 */
function kernel_1(a,b){
    return Math.pow((a-b),2);
}

/**
 * kernel_2 : |a-b| 
 * @param {number} a - a
 * @param {number} b - b 
 * @return {number} The result value.
 */
 function kernel_2(a,b){
    return Math.abs((a-b));
}

/**
 * kernel_3 : 求位置向量的模（位置向量 始点 原点 ｜ 终点 当前参数）
 * @param {number} a - a
 * @param {number} b - b 
 * @return {number} sqrt(a^2+b^2) 
 */
 function kernel_3(a,b){
    return Math.sqrt(a*a+b*b);
}



/**
 * kernel_4 : (a+b)/2
 * @param {number} a - a
 * @param {number} b - b 
 * @return {number} The result value.
 */
 function kernel_4(a,b){
    return (a+b)/2;
}

/** kernel_5 : get the rendom float number from [0,max)
 * @param {number} max - the superior limit of the radom reagion
 * @return {number} the random float number
 */
function kernel_5(max) {
    return (Math.random() * max);       
  }

/**
 * 角度转弧度
 * @param {number} a - 角度 
 * @returns {number} 返回弧度
 */
export function kernel_6(a){
    return a*(Math.PI/180);
}



/**
 * 弧度转角度
 * @param {number} a - 弧度 
 * @returns {number} 返回角度
 */
export function kernel_7(a){
    return a*Math.pow((Math.PI/180),-1);
}

/** kernel_8 : get the rendom float number from [0,max)
 * @param {number} max - the superior limit of the radom reagion
 * @return {number} the random float number
 */
 export function kernel_8(max) {
    return Math.round(Math.random() * max + 0.5);       
  }


/**
 * kernel_arr_1 : mean of [...]&[...]： [(a1+b1)/2,(a2+b2)/2,...]
 * @param {Array} a - a
 * @param {Array} b - b 
 * @return {Array} The result value.
 */
 function kernel_arr_1(a,b){
    let m=[];
    for(let i=0;i<a.length;i++)
    {
        m.push(kernel_4(a[i],b[i]));
    } 
    return m;
}


/**
 * kernel_arr_2 : [result]=[a1-b1,a2-b2,...]
 * @param {Array} a - a
 * @param {Array} b - b 
 * @return {Array} The result array.([a1-b1,a2-b2,...])
 */
 function kernel_arr_2(a,b){
    let m=[];
    for(let i=0;i<a.length;i++)
    {
        m.push(a[i]-b[i]);
    } 
    return m;
}


/**
 * kernel_arr_3 : number * [arr] = [num*arr1,num*arr2...]
 * @param {number} n - a
 * @param {Array} b - b 
 * @return {Array} The result value.([num*arr1,num*arr2...])
 */
 function kernel_arr_3(n,b){
    let m=[];
    for(let i=0;i<b.length;i++)
    {
        m.push(n*b[i]);
    } 
    return m;
}

/**
 * kernel_arr_4 : 两列向量对应位置的元素相乘
 * @param {array} a - a
 * @param {array} b - b 
 * @return {array} [a1 * b1 , a2 * b2...]
 */
 function kernel_arr_4(a,b){
    let m=[];
    for(let i=0;i<a.length;i++)
    {
        m.push(a[i]*b[i]);
    } 
    return m;
}

/**
 * kernel_arr_5 : 点积 dot product [a1,a2,a3...] * [b1,b2,b3...]
 * @param {array} a - a
 * @param {array} b - b 
 * @return {number} a1 * b1+a2 * b2...
 */
 function kernel_arr_5(a,b){
    let m=0;
    for(let i=0;i<a.length;i++)
    {
        m+=a[i]*b[i];
    } 
    return m;
}

/**
 * kernel_arr_6 : 求两点组成的向量关于x轴的角度
 * 会先将开始点移至原点，然后求向量与（1，0）向量的夹角
 * @param {array} a - 始点
 * @param {array} b - 终点
 * @return {number} - 返回与x轴的夹角 范围：[0,360)
 */
 function kernel_arr_6(a,b){

    if(kernel_arr_9(a,b)){return -1;}
    let abmv = kernel_arr_7(a,b);
    //console.log(abmv[0]+"| |"+abmv[1])
    let dot_product=kernel_arr_5(abmv,ori_x);
    //console.log(dot_product)
    let cos_va=dot_product/(kernel_arr_8(a,b)*1) ;
    let angle = (Math.acos(cos_va) * 180 )/ Math.PI;
    //console.log(angle)
    if (abmv[1] < 0) angle = -angle;
    return (angle+360) % 360 ;
}

/**
 * kernel_arr_7 : 将由两点表示的向量的坐标系移动至原点
 * @param {array} a - 始点
 * @param {array} b - 终点 
 * @return {array} [b1-a1,b2-a2,...]
 */
 function kernel_arr_7(a,b){
    let m=[];
    for(let i=0;i<a.length;i++)
    {
        m.push(b[i]-a[i]);
    } 
    return m;
}

/**
 *  mod of a vector :
 * * （将由两点表示的向量的坐标系移动至原点） __向量求模__
 * @param {array} a - 始点
 * @param {array} b - 终点 
 * @return {number} sqrt((a1-b1)^2+...)
 */
 function kernel_arr_8(a,b){
    let mv = kernel_arr_7(a,b);
    return kernel_3(mv[0],mv[1]);
}

/**
 * kernel_arr_9 : 判断两个列向量是否完全一样
 * @param {array} a - a
 * @param {array} b - b 
 * @return {boolean} The result value.
 * |两向量一样|两向量不一样|
 * |--|--|
 * |true|false|
 */
 function kernel_arr_9(a,b){
    if(a.length!=b.length){return false;}
    else{
        let boo = true;
        for(let i=0;i<a.length;i++)
        {
           if(a[i]!==b[i]){boo=false;break;}
        } 
        return boo;
    }
}




    /**
     * 
     * @param {array} sp1 - 向量1始点 [x,y]
     * @param {array} ep1 - 向量1终点
     * @param {array} sp2 - 向量2始点
     * @param {array} ep2 - 向量2终点
     */
    function kernel_arr_10(sp1,ep1,sp2,ep2){
    let ang1 = kernel_arr_6(sp1,ep1);
    let ang2 = kernel_arr_6(sp2,ep2);
    let res = kernel_2(ang1,ang2);
    return res;
    }
   
/**
 * kernel_arr_11 : 叉积 ：
 * - [x1,y1] , [x2,y2] => （x1 * y2） - （y1 * x2）
 * @param {array} a - [x1,y1]
 * @param {array} b - [x2,y2]
 * @return {number} （x1 * y2） - （y1 * x2）
 */
function kernel_arr_11(a,b){
    let m = a[0]*b[1] - a[1]*b[0];
    return m;
}


 /**
     * 依照x升序排序 若x相同则依照y升序排序
     * @param {Point} a 
     * @param {Point} b 
     * @returns 
     */
  function x_sort(b,a){
    if(a.x - b.x === 0 ){
        return a.y - b.y;
    }
    else {return a.x - b.x;}
}

/**
 * 二维矩阵操作算子
 * * 返回两个矩阵相乘结果
 * * 需要保证待求举证与参数矩阵大小一致
 * @param {array} param_matrix - 参数矩阵
 * @param {array} input_cell - 待求矩阵
 * @returns {number} 返回矩阵计算的结果
 */
export function kernel_2Dmatrix_cal(param_matrix,input_cell){
    let row = param_matrix.length;
    let column = param_matrix[0].length;
    let res = 0;

    for(let i =0;i<row;i++){
        for(let j=0;j<column;j++){
            res = res + param_matrix[i][j]*input_cell[i][j];
        }
    }
    return res;
}

/**
 * 拉普拉斯算子 提取边缘
 * @param {array} input_cell - 输入卷积区域
 * @returns {number} 输出计算结果
 */
export function kernel_2Dmatrix_1(input_cell){
    let Laplace_operator = 
    [
        [0,1,0],
        [1,-4,1],
        [0,1,0]
    ]//二维拉普拉斯算子 提取边缘
    let res = kernel_2Dmatrix_cal(Laplace_operator,input_cell);
    return  res;
}


/**
 * 坡度提取 默认3x3矩阵
 * @param {array} input_cell - 输入卷积区域
 * @returns {number} 输出计算结果
 */
 export function kernel_2Dmatrix_2(input_cell){
    let slope_we_operator = 
    [
        [0,0,0],
        [1/6,0,-1/6],
        [0,0,0]
    ];
    let slope_sn_operator = 
    [
        [0,-1/6,0],
        [0,0,0],
        [0,1/6,0]
    ]

    // let slope_we_operator = 
    // [
    //     [-1/6,0,1/6],
    //     [-1/6,0,1/6],
    //     [-1/6,0,-1/6]
    // ];

    // let slope_sn_operator = 
    // [
    //     [-1/6,-1/6,-1/6],
    //     [0,0,0],
    //     [1/6,1/6,1/6]
    // ]

    let slope_we = kernel_2Dmatrix_cal(slope_we_operator,input_cell);
    let slope_sn = kernel_2Dmatrix_cal(slope_sn_operator,input_cell);
    let slope = Math.sqrt(slope_sn*slope_sn+slope_we*slope_we);
    return  slope;
}

/**
 * 坡向提取 默认3x3矩阵
 * @param {array} input_cell - 输入卷积区域
 * @returns {number} 输出计算结果
 */
 export function kernel_2Dmatrix_3(input_cell){
    
    // let slope_we_operator = 
    // [
    //     [-1/8,0,1/8],
    //     [-1/4,0,1/4],
    //     [-1/8,0,-1/8]
    // ];

    // let slope_sn_operator = 
    // [
    //     [-1/8,-1/4,-1/8],
    //     [0,0,0],
    //     [1/8,1/4,1/8]
    // ]

    let slope_we_operator = 
    [
        [0,0,0],
        [1/6,0,-1/6],
        [0,0,0]
    ];

    let slope_sn_operator = 
    [
        [0,-1/6,0],
        [0,0,0],
        [0,1/6,0]
    ]

    let slope_we = -kernel_2Dmatrix_cal(slope_we_operator,input_cell);
    let slope_sn = -kernel_2Dmatrix_cal(slope_sn_operator,input_cell);
    //let aspect = Math.abs(slope_sn/slope_we);
    let aspect = 57.29578*Math.atan2(slope_sn,-slope_we);
    let cell = 0;

    //根据arcgis官网内容修正
    if (aspect < 0){
        cell = 90.0 - aspect;
    } 
    else if (aspect > 90.0){
        cell = 360.0 - aspect + 90.0 ;
    } 
    else {
        cell = 90.0 - aspect;
    }

    return  cell;
}

    /**
 * simpleline列表去重算法
 * @param {array} list 
 */
 function 
 dedupSimpleLineList_(list1){
    let list = list1.slice();
    let res = [];

    while(list.length!=0){
        let el = list.pop();
        if( list.findIndex((element) => (element.IsSameLine_(el))) === -1){
            res.push(el);
        }
        else{
            continue;
        }
    }
    return res;
}
export {
    kernel_1,
    kernel_2,
    kernel_3,
    kernel_4,
    kernel_5,
    kernel_arr_1,
    kernel_arr_2,
    kernel_arr_3,
    kernel_arr_4,
    kernel_arr_5,
    kernel_arr_6,
    kernel_arr_7,
    kernel_arr_8,
    kernel_arr_9,
    kernel_arr_10,
    kernel_arr_11
}