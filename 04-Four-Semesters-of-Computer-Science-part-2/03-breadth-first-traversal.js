const breadthFirstTraverse = (queue, array) => {
  let firstItem = queue.shift()
  while(firstItem) {
    array.push(firstItem.value)
    if (firstItem.left) queue.push(firstItem.left)
    if (firstItem.right) queue.push(firstItem.right)
    firstItem = queue.shift()
  }
  return array
}


// unit tests
// do not modify the below code
describe('tests', function() {
  const answer = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ];
  
  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };
  
  render(tree, answer);
  
  it('breadthFirstTraverse', () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});