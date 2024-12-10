import assert           from 'node:assert';
import IdNameGenerator  from '@superhero/id-name-generator'
import { suite, test }  from 'node:test'

suite('@superhero/id-name-generator', () => 
{
  test('Produce unique IDs on consecutive calls', () => 
  {
    const 
      generator = new IdNameGenerator(),
      id1       = generator.generateId(),
      id2       = generator.generateId()

    assert.notStrictEqual(id1, id2, 'Consecutive IDs should be unique')
  })

  suite('Generate', () =>
  {
    test('Characteristic from the default list', () => 
    {
      const 
        generator       = new IdNameGenerator(),
        characteristic  = generator.generateCharacteristic()
  
      assert.ok(
        generator.characteristics.includes(characteristic),
        `Characteristic "${characteristic}" should be in the list`)
    })
  
    test('Name based on defined patterns', () => 
    {
      const 
        generator = new IdNameGenerator(),
        name      = generator.generateName()
  
      assert.ok(name.length > 0, 'Generated name should not be empty')
    })
  
    test('Unique ID with characteristic, name, and timestamp', () => 
    {
      const 
        generator = new IdNameGenerator(),
        id        = generator.generateId(),
        parts     = id.split('-')
  
      assert.strictEqual(parts.length, 3, 'ID should have three parts separated by hyphens')
      assert.ok(generator.characteristics.includes(parts[0]), 'First part should be a valid characteristic')
      assert.ok(parts[1].length > 0, 'Second part (name) should not be empty')
      assert.ok(/^[0-9a-z]+$/.test(parts[2]), 'Third part (timestamp) should be a valid base36 string')
    })
  
    test('Name with custom prefixes, roots, and suffixes', () => 
    {
      const customConfig = 
      {
        PREFIXES  : ['test1'],
        ROOTS     : ['test2'],
        SUFFIXES  : ['test3']
      }
      const 
        generator = new IdNameGenerator(customConfig),
        name      = generator.generateName()
  
      assert.ok(
        /test1|test2|test3/.test(name),
        `Generated name "${name}" should include custom prefixes, roots, or suffixes`)
    })
  })
})