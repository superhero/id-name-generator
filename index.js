export default class IdNameGenerator
{
  characteristics =
  [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'black', 'white', 'gray', 'pink', 'brown',
    'crimson', 'emerald', 'sapphire', 'azure', 'amber', 'ivory', 'onyx', 'ruby', 'scarlet', 'jade', 
    'golden', 'silver', 'ebony', 'bronze', 'copper', 'turquoise', 'pearl', 'obsidian', 'indigo', 
    'cyan', 'lavender', 'teal', 'maroon', 'navy', 'coral', 'burgundy', 'chartreuse', 'vermilion',
    'mighty', 'fierce', 'brave', 'shrewd', 'wise', 'cunning', 'fearless', 'silent', 'apathetic',
    'grim', 'vengeful', 'steadfast', 'unwavering', 'daring', 'wily', 'dauntless', 'bold',
    'valiant', 'intrepid', 'noble', 'astute', 'loyal', 'diligent', 'meticulous', 'tactful', 
    'patient', 'ambitious', 'determined', 'pragmatic', 'stoic', 'indomitable', 'arcane', 'swift', 
    'agile', 'relentless', 'mystic', 'savage', 'enigmatic', 'confident', 'enthusiastic', 'pensive',
    'phantom', 'telekinetic', 'alchemical', 'necrotic', 'psionic', 'clairvoyant', 'hypnotic',
    'pyromantic', 'aquatic', 'geomantic', 'nocturnal', 'aerial', 'subterranean', 'radiant', 
    'shadowed', 'ominous', 'gleaming', 'majestic', 'dreaded', 'shimmering', 'nostalgic', 
    'eclipsed', 'cryptic', 'luminous', 'hallowed', 'ethereal', 'ancient', 'gothic', 'melancholy', 
    'macabre', 'eerie', 'spectral', 'elegant', 'graceful', 'regal', 'shady', 'traditional', 'modern',
    'fiery', 'frostbound', 'stormborne', 'earthly', 'embered', 'glacial', 'frosted', 'swooping', 
    'volcanic', 'tempestuous', 'windborne', 'lightning', 'aetheric', 'tidal', 'lunar', 'flame',
    'stoneclad', 'sandstorm', 'emberblaze', 'frostbite', 'quicksilver', 'aurora', 'stalking', 
    'soaring', 'crashing', 'roaring', 'pulsing', 'blazing', 'howling', 'shaker', 'flaring', 
    'raging', 'charging', 'dashing', 'weaving', 'gliding', 'lurking', 'prowling', 'flitting', 
    'darting', 'bounding', 'leaping', 'clashing', 'basic', 'nuanced', 'intricate', 'refined', 
    'sophisticated', 'minimal', 'vivid', 'subtle', 'muted', 'mournful', 'compassionate', 'zealous', 
    'vibrant', 'calm', 'chaotic', 'harmonious', 'formal', 'casual', 'rustic', 'divine', 'sacred', 
    'profane', 'touched', 'serene', 'intense', 'melancholic', 'joyful', 'mysterious', 'playful',
    'futuristic', 'vintage', 'avant-garde', 'ornate', 'industrial', 'urban', 'elated', 'ecstatic',
    'exquisite', 'austere', 'baroque', 'abstract', 'geometric', 'pristine', 'jealous', 'frustrated', 
    'indocrinated', 'rebellious', 'submissive', 'subversive', 'happy', 'sad', 'angry', 'somber', 
    'excited', 'peaceful', 'anxious', 'hopeful', 'curious', 'bitter', 'sorrowful', 'grateful', 
  ]

  prefixes   = ['aer','hyd','lum','neb','sol','ter','xan','zor','vor','grim','arg','val','zen','dra','mor','lyr','fer']
  roots      = ['tor','var','dom','gon','lis','thal','mir','zar','ros','mak','ul','rad','nis','ven','kyn','vor']
  suffixes   = ['nix','dor','lia','zen','tris','gorn','vex','rith','mos','tin','lok','den','thor','ron','ryn']
  connectors = ['a','e','i','o','u','y','ae','ia','or','il','ar']
  midfixes   = ['dra','kir','vel','sta','mir','lor','zar','gal','orn','ryn']

  constructor(config)
  {
    this.config = config || {}

    this.characteristics = this.config.CHARACTERISTICS  ?? this.characteristics
    this.prefixes        = this.config.PREFIXES         ?? this.prefixes
    this.roots           = this.config.ROOTS            ?? this.roots
    this.suffixes        = this.config.SUFFIXES         ?? this.suffixes
    this.connectors      = this.config.CONNECTORS       ?? this.connectors
    this.midfixes        = this.config.MIDFIXES         ?? this.midfixes
  }

  generateCharacteristic()
  {
    return this.characteristics[Math.floor(Math.random() * this.characteristics.length)]
  }

  generateName()
  {
    const 
      patterns =
      [
        [this.prefixes, this.roots],
        [this.roots,    this.suffixes],
        [this.prefixes, this.connectors, this.roots],
        [this.roots,    this.connectors, this.suffixes],
        [this.prefixes, this.midfixes,   this.suffixes],
        [this.roots,    this.connectors, this.midfixes, this.suffixes],
      ],
      pattern = patterns[Math.floor(Math.random() * patterns.length)],
      name    = pattern.map((arr) => arr[Math.floor(Math.random() * arr.length)]).join('')

    return name
  }

  generateId()
  {
    const
      characteristic  = this.generateCharacteristic(),
      name            = this.generateName(),
      timestamp       = Date.now().toString(36),
      id              = `${characteristic}-${name}-${timestamp}`

    return id
  }
}