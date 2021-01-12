<template>
<div class='search-bar'>
    <span class='icon'></span>
    <input class='search-text' placeholder="Search"/>
</div>
</template>

<style scoped>
.search-bar {
    display: inline-block;
    background-color: white; 
    padding: 3px 15px 3px 15px; 
    border-radius: 30px; 
    display: inline-block;
    font-size: 16px; 
    margin: 2px 10px 5px 2px;
    border-color: white;
    border-style: solid;
    border-width: 1px;
    color: var(--text-light);
    width: 222px;
    box-shadow: 4px 4px 4px rgba(151, 151, 151, 0.25);
}
.icon {
    margin-right: 5px;
}
input {
    border-color: transparent;
    width: 100%;
    font-size: 16px; 
}
input:focus {
    outline: none;
}

@media screen and (min-width: 767px) {
    .search-bar {
        width: 260px;
    }
}
</style>

<script>
// import { SelectSearch } from "mdue";
export default {
    components: {
        // SelectSearch
        // mdbIcon
    },
}
</script>