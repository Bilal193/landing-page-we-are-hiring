const searchButton = document.getElementById('searchbtn');
const searchbox = document.getElementById('searchbox');
const clickfunction = () => {
    if (searchbox.classList.contains('d-none')) {
        searchbox.classList.remove("d-none");

    } else {

        searchbox.classList.add("d-none");
    }

}
searchButton.addEventListener('click', clickfunction)