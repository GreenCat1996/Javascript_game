export default [
  {
    name: 'Walk here',
    actionId: 'player:walk-here',
    context: ['gameMap'],
    allow: true,
    nearby: false,
    weight: 2,
  },
  {
    name: 'Take',
    actionId: 'player:take',
    context: ['gameMap'],
    allow: ['item'],
    nearby: 'exact',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Examine',
    actionId: 'player:examine',
    context: ['gameMap', 'inventorySlot', 'bankSlot', 'furnaceSlot'],
    allow: ['npc', 'item'],
    nearby: false,
    weight: 5,
  },
  {
    name: 'Drop',
    actionId: 'player:inventory-drop',
    context: ['inventorySlot'],
    allow: ['item'],
    disallowWhile: ['bank', 'shop'],
    nearby: false,
    weight: 99,
  },
  {
    name: 'Equip',
    actionId: 'item:equip',
    context: ['inventorySlot'],
    disallowWhile: ['bank', 'shop'],
    allow: ['item'],
    nearby: false,
    weight: 1,
  },
  {
    name: 'Unequip',
    actionId: 'item:unequip',
    context: ['wearSlot'],
    allow: ['item'],
    nearby: false,
    weight: 1,
  },
  {
    name: 'Mine',
    actionId: 'player:resource:mining:rock',
    context: ['gameMap'],
    allow: ['foreground'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Smelt',
    actionId: 'player:resource:smelt:furnace:action',
    context: ['furnaceSlot'],
    allow: ['item'],
    nearby: 'edge',
    weight: 1,
    onPane: ['furnace'],
  },
  {
    name: 'Smelt',
    actionId: 'player:resource:smelt:furnace:pane',
    context: ['gameMap'],
    allow: ['foreground'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Push',
    actionId: 'player:resource:goldenplaque:push',
    context: ['gameMap'],
    allow: ['foreground'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Bank',
    actionId: 'player:screen:bank',
    context: ['gameMap'],
    allow: ['npc'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Deposit',
    actionId: 'player:screen:bank:action',
    context: ['inventorySlot'],
    allow: ['item'],
    nearby: false,
    weight: 1,
    onPane: ['bank'],
  },
  {
    name: 'Withdraw',
    actionId: 'player:screen:bank:action',
    context: ['bankSlot'],
    allow: ['item'],
    nearby: false,
    weight: 1,
    onPane: ['bank'],
  },
  {
    name: 'Trade',
    actionId: 'player:screen:npc:trade',
    context: ['gameMap'],
    allow: ['item'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Buy',
    actionId: 'player:screen:npc:trade:action',
    context: ['shopSlot'],
    allow: ['item'],
    nearby: false,
    weight: 2,
    onPane: ['shop'],
  },
  {
    name: 'Sell',
    actionId: 'player:screen:npc:trade:action',
    context: ['inventorySlot'],
    allow: ['item'],
    nearby: false,
    weight: 2,
    onPane: ['shop'],
  },
  {
    name: 'Value',
    actionId: 'player:screen:npc:trade:action:value',
    context: ['shopSlot', 'inventorySlot'],
    allow: ['item'],
    nearby: false,
    weight: 1,
    onPane: ['shop'],
  },
];
