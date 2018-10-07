export function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ACTIONS = [
  'walk the dog',
  'drink wine',
  'learn philosphy',
  'traditional Ethiopian meal',
  'camping',
  'hiking yosemite',
  'math tutor',
  'pickup from Yosemite High',
  '3:00PM soccer practice',
  'traditional lithuanian dance',
  'nerf gun battle',
  'skip rocks on the lake',
  'listen to live music',
  'attend my family piano recital',
  'learn spanish in 2 hours',
  'help around the garden',
  'make a traditional Swahili dress',
  'have a chess match',
  'make Italian Pasta'
];

export function getRandomAction() {
    let num = Math.floor(Math.random() * Math.floor(ACTIONS.length));
    return capitalize(ACTIONS[num])
}
