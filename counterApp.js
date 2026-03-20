let init = 0
let h = document.querySelector("h3")
function inc()
{
    init++
    h.innerText = init
}
function dec()
{
    init--
    h.innerText = init
}
function reset()
{
    init = 0
    h.innerText = init
}

