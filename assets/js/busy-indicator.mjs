
const markup = `
<div class="busy-indicator">
    <div class="component-container">
        <div class="animatable-obj2">DATA</div>
        <div class="--animatable-obj"></div>
    </div>
    <br/>
    <div class="component-label" style="color: #fff;">...LOADING...</div>
    <div style="color: #fff; text-align: center">...and then waiting for a few seconds</div>
</div>
`;

export function createBusyIndicator() {
    const el = document.createElement('div');
    el.innerHTML = markup;

    return el;
}
