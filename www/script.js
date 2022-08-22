console.log('script loaded')

document.arrive("#dataTable table", function() {
  // 'this' refers to the newly created element
    this.classList.add('table-success', 'table-striped', 'table-hover', 'table-bordered')
});