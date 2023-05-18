async function fetchData() {
    const res = await fetch ("https://api.coronavirus.data.gov.uk/healthcheck");
    const record = await res.json();
    console.log(record);
    document.getElementById("date").innerHTML=record.data[0].date;
}
fetchData();