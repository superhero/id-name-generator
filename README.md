# ID Name Generator

`IdNameGenerator` is a utility class designed to generate random, unique IDs composed of characteristics, names, and timestamps. It offers flexibility through customization, allowing you to define custom characteristics, name components, and patterns. The use of the class is intended for environments where a naming convention benefits from a recognizable ID.

## Example

```javascript
import IdNameGenerator from '@superhero/id-name-generator'

const idNameGenerator = new IdNameGenerator()

for(let i = 0; i < 10; i++)
{
  console.log('ID: ' + idNameGenerator.generateId())
}

// ID: emerald-voraedragorn-m4ig28sa
// ID: vermilion-miruvex-m4ig29e2
// ID: stalking-aerzar-m4ig29ul
// ID: tactful-soldraden-m4ig2abe
// ID: lavender-zenemir-m4ig2ary
// ID: nocturnal-venalok-m4ig2b7r
// ID: roaring-gonuornzen-m4ig2chr
// ID: turquoise-zenrad-m4ig2dhg
// ID: profane-aermir-m4ig2lxb
```

## Features

- Generate random characteristics from a predefined list.
- Create unique names using customizable patterns (prefixes, roots, suffixes, connectors, etc.).
- Produce unique IDs with a characteristic, name, and timestamp.

## Installation

Include the `IdNameGenerator` class in your project:

```bash
# Clone or copy the file into your project
```

## Usage

### Import and Initialize

```javascript
import IdNameGenerator from '@superhero/id-name-generator'

// Initialize with default configuration
const generator = new IdNameGenerator()

// Or provide custom configurations
const customConfig = 
{
  CHARACTERISTICS : ['custom1', 'custom2'],
  PREFIXES        : ['alpha'],
  ROOTS           : ['beta'],
  SUFFIXES        : ['gamma'],
  CONNECTORS      : ['x'],
  MIDFIXES        : ['delta']
}

const customGenerator = new IdNameGenerator(customConfig)
```

### Generate Outputs

#### Generate a Characteristic

```javascript
const characteristic = generator.generateCharacteristic()
console.log(characteristic) // Example: "red"
```

#### Generate a Name

```javascript
const name = generator.generateName()
console.log(name) // Example: "aervar"
```

#### Generate a Unique ID

```javascript
const id = generator.generateId()
console.log(id) // Example: "red-aervar-jw9qjxp"
```

## Configuration Options

You can customize the following properties:

| Property         | Description                                   | Default Values                             |
|------------------|-----------------------------------------------|--------------------------------------------|
| `CHARACTERISTICS`| List of descriptive words for characteristics | Various colors, attributes, emotions, etc. |
| `PREFIXES`       | Starting components for names                 | `['aer', 'hyd', 'lum', ...]`               |
| `ROOTS`          | Middle components for names                   | `['tor', 'var', 'dom', ...]`               |
| `SUFFIXES`       | Ending components for names                   | `['nix', 'dor', 'lia', ...]`               |
| `CONNECTORS`     | Vowel-like connections between components     | `['a', 'e', 'i', ...]`                     |
| `MIDFIXES`       | Additional middle components for names        | `['dra', 'kir', 'vel', ...]`               |

## Patterns for Name Generation

Names are created using random patterns. Examples of patterns include:
- `[prefix + root]`
- `[root + suffix]`
- `[prefix + connector + root]`
- `[root + connector + midfix + suffix]`

## Example ID Structure

A generated ID is structured as:
```
<characteristic>-<name>-<timestamp>
```
Example: `blue-dratin-10sjksl`.

## Testing

The test suite uses Node.js's built-in testing module.

### Running Tests

To run the tests, execute:

```bash
npm test
```

### Test Coverage

```
▶ @superhero/id-name-generator
  ✔ Produce unique IDs on consecutive calls (2.057126ms)

  ▶ Generate
    ✔ Characteristic from the default list (0.300652ms)
    ✔ Name based on defined patterns (0.117108ms)
    ✔ Unique ID with characteristic, name, and timestamp (0.240969ms)
    ✔ Name with custom prefixes, roots, and suffixes (0.248273ms)
  ✔ Generate (1.147314ms)
✔ @superhero/id-name-generator (4.377658ms)

tests 5
suites 2
pass 5

----------------------------------------------------------------
file            | line % | branch % | funcs % | uncovered lines
----------------------------------------------------------------
index.js        | 100.00 |   100.00 |  100.00 | 
index.test.js   | 100.00 |   100.00 |  100.00 | 
----------------------------------------------------------------
all files       | 100.00 |   100.00 |  100.00 | 
----------------------------------------------------------------
```

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues or pull requests for improvements or additional features.
