import { getInteger } from './jest.dummy'

describe('jest', function () {
    it('should work', function () {
        expect(getInteger()).toBe(1)
    })
})
