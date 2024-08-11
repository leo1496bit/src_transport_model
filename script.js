let fieldset = document.querySelectorAll(".form-transport fieldset");
        let formProgress = document.querySelectorAll(".form-progress-element");
        function change(n){
             let indCurrent = Array.from(fieldset).findIndex(it=>!it.classList.contains("d-none"));
             fieldset.item(indCurrent).classList.add("d-none");
             fieldset.item(indCurrent+n).classList.remove("d-none");
             formProgress.item(indCurrent).classList.remove("active");
             formProgress.item(indCurrent+n).classList.add("active");
 
        }