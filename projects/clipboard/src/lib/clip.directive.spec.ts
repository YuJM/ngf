import { ClipDirective } from './clip.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('ClipboardDirective', () => {
    let spectator: SpectatorDirective<ClipDirective>;
    const createDirective = createDirectiveFactory(ClipDirective);
    beforeEach(() => {
        spectator = createDirective(`<p #p>test</p><div [ngfClip]="p" id="cp">Testing Highlight Directive</div>`);
    });
    it('copy test', () => {
        spectator.dispatchMouseEvent(spectator.element, 'click');
        // spectator.fixture.detectChanges();
        expect(spectator.directive.result).toBe('test');
    });
    it('output test', () => {
        let output;
        spectator.directive.ngfOut
            .subscribe((data) => (output = data));
        spectator.dispatchMouseEvent(spectator.element, 'click');
        // await spectator.fixture.whenStable();
        // spectator.detectChanges();
        expect(output).toEqual({copyText: 'test'});
    });
});
