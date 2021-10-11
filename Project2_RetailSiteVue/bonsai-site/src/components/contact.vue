<template>
  <div class="container-fluid">
    <div class="contact">
      <h1>Contact</h1>
      <p>
        If you have any questions or would like more information, please do not
        hesitate to contact Herons Bonsai - our staff will be more than happy to
        help you.<br />
        <br />
        <strong>Nursery&nbsp;Opening Hours&nbsp;<br /></strong>
        <span
          ><b
            style="
              caret-color: rgb(83, 83, 83);
              color: rgb(83, 83, 83);
              font-family: Poppins, sans-serif;
              font-size: 14px;
            "
            >WE ARE CLOSED MONDAY AND TUESDAY EVERY WEEK</b
          ></span
        ><br />
        Wednesday - Saturday | 10am - 5pm (or dusk)<br />
        Sundays &amp; Bank Holidays | 11am - 4pm<br />
        <br />
        <strong>Office Opening Hours</strong><br />
        Monday - Friday&nbsp;| 10.00am - 4.00pm<br />
        Weekends &amp; Bank Holidays | (Nursery is Open but we may not answer
        telephone calls)&nbsp;<br />
        <br />
        <strong>Closed</strong><br />
        - Monday &amp; Tuesday<br />
        - Christmas Day&nbsp;<br />
        - Boxing Day<br />
        - New Years Day<br />
        - Easter Sunday<br />
      </p>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
body{
    background-color: rgb(151, 146, 146);
}

.container-fluid  {
    position: fixed;
    height: 100vh;
    overflow-y: auto;
  }

/*Contact*/

strong  {
    font-weight: 500;
}

.contact    {
    color: white;
    font-family: 'Hind', sans-serif;
    padding: 8% 18% 0% 18% ;
    font-weight: 300;
}
@media (max-width: 767px){
    .contact  {
        padding-top: 6rem;}
}

.contact  h1  {
    text-align: center;
    border-bottom-color: rgb(201, 198, 198);
    border-bottom-width: 1px; 
    border-bottom-style: solid;
    padding-bottom: 1%;
}

.contact  p  {
    text-align: center;
    padding-top: 1%;
}
</style>