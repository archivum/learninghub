<template>
  <div>
    <h1>CSS Grid</h1>
    <div class='split-line'>
      <hr/>
    </div>

    <!--Beginning of tutorial-->

    <img class="container">

    <h3>Fractions</h3>
    <p class='tag'>grid-template-columns: 1fr 1fr</p>
    <p>Splits the grid into columns via fractions</p>
    <div class="grid grid1">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
    </div>

    <h3>Split Setup</h3>
    <p class='tag'>grid-template-columns: repeat(4, 1fr 2fr)</p>
    <p>Splits the grid into off-even containers.</p>
    <div class="grid grid2">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
      <div class="box3">Box 3</div>
      <div class="box4">Box 4</div>
    </div>

    <h3>Split Setup</h3>
    <p class='tag'>grid-auto-rows: 10em</p>
    <p class='tag'>grid-auto-rows: minmax(100px, auto)</p>
    <p>Defines how high you want to set your containers. If you set by specific height, that will be the heigh of the
      container regardless of content. If you use 'minmax' you set a height unless some of the content runs longer in
      which case the container will adapt in height.</p>
    <div class="grid grid3">
      <div class="box1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus commodi cumque
        cupiditate dignissimos doloribus error harum mollitia nostrum officia optio quibusdam quis, ut. Adipisci
        aliquam asperiores at autem consequuntur corporis culpa cumque dignissimos dolore doloribus earum eum
        excepturi facere id illum, impedit inventore iure iusto laborum minus nihil nostrum nulla officia pariatur
        praesentium provident qui quia quibusdam quidem recusandae repudiandae sapiente sint sit veritatis vero vitae
        voluptate. Asperiores dolorum illum qui sit? Ad culpa deserunt illo minima nobis voluptate voluptates?
        Aspernatur beatae dolorem et laborum minima mollitia nisi nostrum pariatur placeat possimus, quam repellat
        reprehenderit saepe ut veritatis vitae?
      </div>
      <div class="box2">Box 2</div>
      <div class="box3">Box 3</div>
      <div class="box4">Box 4</div>
    </div>

    <h3>Nested Grids</h3>
    <p>To nest a grid you create another DIV then apply the same principles</p>
    <div class="grid grid4">
      <div class="box1">
        Box 1
        <div class="box1nested">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div class="box2">Box 2</div>
      <div class="box3">Box 3</div>
      <div class="box4">Box 4</div>
    </div>

    <h3>Justify Items: Start</h3>
    <p>Sets the box length to the width of the content inside.</p>
    <div class="grid grid5">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
    </div>

    <h3>Justify Items: End</h3>
    <p>Sets the box length to the width of the content inside</p>
    <div class="grid grid6">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
    </div>

    <h3>Justify Items: Center</h3>
    <p>Centers and aligns the children horizantally within the grid space</p>
    <div class="grid grid7">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
    </div>


    <h3>Align Items: End</h3>
    <p>Moves the children within the grid vertically</p>
    <div class="grid grid8">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
    </div>

    <h3>The power of grid</h3>
    <p>Grid allows for restructoring but also overlap of element unlike other things like Flexbox</p>
    <div class="grid grid9">
      <div class="box1">Box 1</div>
      <div class="box2">Box 2</div>
      <div class="box3">Box 3</div>
      <div class="box4">Box 4</div>
      <div class="box5">Box 5</div>
      <div class="box6">Box 6</div>
    </div>

  </div>

</template>

<style scoped>


  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*BASIC SETUP*/

  .container {
    padding: 2em;
  }

  .grid {
    padding-top: 10px;
    padding-bottom: 70px;
  }

  .tag {
    margin: 20px;
  }

  h3, h4 {
    color: black;
  }

  .grid1 {

    /* 1. We define the grid here*/
    display: grid;

    /* 2. Define WIDTH. This breaks up the columns*/
    /*You can use % or PX*/

    grid-template-columns: 1fr 1fr;

    /*3. Sets a grid gap*/
    grid-gap: 1em;
  }

  .grid1 .box1 {
    background-color: blue;
  }

  .grid1 .box2 {
    background-color: #ff964f;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*SPLIT SETUP*/

  .grid2 {

    display: grid;
    grid-template-columns: repeat(2, 1fr 2fr);
    grid-gap: 1em;

  }

  .grid2 .box1 {
    background-color: blue;
  }

  .grid2 .box2 {
    background-color: #ff964f;
  }

  .grid2 .box3 {
    background-color: #43dfff;
  }

  .grid2 .box4 {
    background-color: #ff5663;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*GRID AUTO ROWS*/

  .grid3 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    grid-auto-rows: minmax(100px, auto);
    /*grid-auto-rows: 10em;*/

  }

  .grid3 .box1 {
    background-color: blue;
  }

  .grid3 .box2 {
    background-color: #ff964f;
  }

  .grid3 .box3 {
    background-color: #43dfff;
  }

  .grid3 .box4 {
    background-color: #ff5663;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*NESTED GRIDS*/

  .grid4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    grid-auto-rows: 10em;

  }

  .grid4 .box1 {
    background-color: blue;
  }

  .grid4 .box1nested {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    padding: 1em;
  }

  .grid4 .box1nested > div {
    background-color: #ff7a9c;
  }

  .grid4 .box2 {
    background-color: #ff964f;
  }

  .grid4 .box3 {
    background-color: #43dfff;
  }

  .grid4 .box4 {
    background-color: #ff5663;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*JUSTIFY START*/

  .grid5 {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 1em;
    grid-auto-rows: 10em;
    /*This works in relation to the WIDTH of the items*/
    justify-items: start;
  }

  .grid5 .box1 {
    background-color: blue;
  }

  .grid5 .box2 {
    background-color: #ff964f;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*JUSTIFY END*/

  .grid6 {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 1em;
    grid-auto-rows: 10em;
    /*This works in relation to the WIDTH of the items*/
    justify-items: end;
  }

  .grid6 .box1 {
    background-color: blue;
  }

  .grid6 .box2 {
    background-color: #ff964f;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*JUSTIFY END*/

  .grid7 {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 1em;
    grid-auto-rows: 10em;
    /*This works in relation to the WIDTH of the items*/
    justify-items: center;
  }

  .grid7 .box1 {
    background-color: blue;
  }

  .grid7 .box2 {
    background-color: #ff964f;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*ALIGN ITEMS*/

  .grid8 {
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 1em;
    grid-auto-rows: 10em;

    justify-items: start;
    /*Align items moved the children within the grid vertically*/
    align-items: end;
  }

  .grid8 .box1 {
    background-color: blue;
  }

  .grid8 .box2 {
    background-color: #ff964f;
  }

  /*///////////////////////////////////////////////////////////////////////////////////////////////////*/

  /*ALIGN ITEMS*/

  .grid9 {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;

    /*grid-gap: 1em;*/
    /*grid-auto-rows: 10em;*/
    justify-items: stretch;
    align-items: stretch;

  }

  .grid9 .box1 {
    background-color: blue;
    grid-column: 1/3;
    /*align-self: start;*/
    padding: 20px;
  }

  .grid9 .box2 {
    background-color: #ff964f;
    padding: 20px;
    /*align-self: end;*/
  }

  .grid9 .box3 {
    background-color: #43dfff;
    padding: 20px;
    /*justify-self: end;*/
  }

  .grid9 .box4 {
    background-color: #ff5663;
    padding: 20px;
    /*grid-column: 1/2;*/
    /*grid-row: 2/4;*/
  }

  .grid9 .box5 {
    background-color: #6effe6;
    padding: 20px;
    /*justify-self: end;*/
  }

  .grid9 .box6 {
    background-color: #ff80c5;
    padding: 20px;
    /*grid-column: 1;*/
    grid-row: 2/4;
  }

</style>
