let fieldset = document.querySelectorAll(".form-transport fieldset");
        let formProgress = document.querySelectorAll(".form-progress-element");
        function change(n){
             let indCurrent = Array.from(fieldset).findIndex(it=>!it.classList.contains("d-none"));
             let formProgFinalize = document.querySelector(".form-prog-finalize");
             fieldset.item(indCurrent).classList.add("d-none");
             fieldset.item(indCurrent+n).classList.remove("d-none");
             formProgress.item(indCurrent).classList.remove("active");
             if(n===1)
               formProgress.item(indCurrent).classList.add('fill');
             else
               formProgress.item(indCurrent+n).classList.remove('fill');
             formProgress.item(indCurrent+n).classList.add("active");
             document.querySelector(".form-progress-group").classList.remove("d-none");
             document.querySelector(".form-progress-group").classList.add("d-show");
             formProgFinalize.classList.remove("d-show");
        }
        function changeToPay(n){
          change(n);
          let formProgFinalize = document.querySelector(".form-prog-finalize");
          document.querySelector(".form-progress-group").classList.remove("d-show");
          document.querySelector(".form-progress-group").classList.add("d-none");
          formProgFinalize.classList.add("d-show");
        }
        function closeModal(){
          document.querySelector(".diag-type-car").closeModal();
        }