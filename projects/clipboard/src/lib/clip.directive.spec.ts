import { ClipDirective } from './clip.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('ClipboardDirective', () => {
	let spectator: SpectatorDirective<ClipDirective>;
	const createDirective = createDirectiveFactory(ClipDirective);
	beforeEach(() => {});
	it('copy test', () => {
		let output;
		spectator = createDirective(
			`<p #p>test</p><div [ngfClip]="p" id="cp">Testing Directive</div>`
		);
		spectator.directive.ngfOut.subscribe(data => (output = data));
		spectator.click(spectator.query('#cp'));
		// spectator.fixture.detectChanges();
		expect(spectator.directive.result).toBe('test');
		expect(output).toEqual({ copyText: 'test' });
	});
	it('paste test', () => {
		spectator = createDirective(
			`<div [ngfClip]="'cucu'" id="cp">Testing Directive</div>
             <br>
             <input type="text" id="output">`
		);
		spectator.click(spectator.query('#cp'));
		spectator.detectChanges();
		// spectator.dispatchMouseEvent(spectator.query('#cp'), 'click');
		let textAreaElement: HTMLInputElement = spectator.query('#output');
		 expect(textAreaElement).toExist();
     expect(textAreaElement).toBeVisible();
		spectator.focus(textAreaElement);
		spectator.click(textAreaElement);
    // spectator.keyboard.pressKey('cmd.v', textAreaElement);
    console.log(spectator.dispatchKeyboardEvent(spectator.element, 'keyup', 'cmd.v', textAreaElement));
		// expect(textAreaElement.value).toBe('cucu');
	});
});
