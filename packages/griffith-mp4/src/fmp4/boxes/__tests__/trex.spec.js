import {trex} from '../mvex'

describe('trex', () => {
  it('should get trex box buffer', () => {
    // prettier-ignore
    expect(trex({trackId: 1})).toEqual(new Uint8Array([
      0x00, 0x00, 0x00, 0x20,   // size
      0x74, 0x72, 0x65, 0x78,   // trex
      0x00, 0x00, 0x00, 0x00,   // version & flags
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x01,   // default_sample_description_index
      0x00, 0x00, 0x00, 0x00,   // default_sample_duration
      0x00, 0x00, 0x00, 0x00,   // default_sample_size
      0x00, 0x01, 0x00, 0x01,   // default_sample_flags
    ]))
  })
})
