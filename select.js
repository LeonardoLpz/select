
function tomarValor() {
    $select = document.querySelector('.select')
    $focus = document.querySelector('.focus')
    $selection = document.querySelector('input[name="select"]:checked');
    var $otherSelect = document.getElementById('otherSelect')
    if(null === $selection){
      console.log("selecciona una opcion")

    }else {

      $otherSelect.placeholder = $selection.value
      $select.style.display = 'none'
      $focus.style.display = 'none'
    }

}
function showSelector() {
    $select = document.querySelector('.select')
    $focus = document.querySelector('.focus')
    $select.style.display = 'grid'
    $focus.style.display = 'grid'

}
