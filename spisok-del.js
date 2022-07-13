const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
      for (let i = 0; i < this.items.length; i++) {
         console.log(todoList.print(i))
      }
    },
  
    add: function(text) {
      return this.items.unshift({text: text, completed: false})
    },
  
    remove: function(index, deleteCount) {
      return this.items.splice(index, deleteCount)
      },
  
    print: function(index) {
      if (this.items[index].completed === false) {
        console.log('[]')
      }
      else {
        console.log('[x]')
      }
      return this.items[index].text
    },
  
    complete: function(index) {
      if (this.items[index].completed === false ) {
        console.log(this.items[index].completed === false)
      }
      else {
        console.log(this.items[index].completed === true)
      }
    },
  };