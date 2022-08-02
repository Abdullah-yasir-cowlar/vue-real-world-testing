import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard'

describe('EventCard.vue', () => {
  it('renders events data successfully', () => {
    const event = {
      id: '123',
      time: '12:00pm',
      date: '12:12:22',
      title: 'Dummy event'
    }
    const wrapper = mount(EventCard, {
      props: {
        event
      }
    })

    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.title)
  })
})
