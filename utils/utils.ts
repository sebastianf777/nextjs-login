export function testFunction() {
  const reactObject = {
    key1: true,
    key2: false,
    key3: 'holis',
  }

  const { key1 } = reactObject
  console.log(key1) // true
  console.log(reactObject.key1) // true
}
