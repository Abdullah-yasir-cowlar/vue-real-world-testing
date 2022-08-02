import { mount } from '@vue/test-utils'
import EventList from '@/views/EventList'

import store from '@/store'
import router from '@/router'

// factory function (reuse mount logic)

function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}
  return mount(EventList, {
    global: {
      plugins: [store, router]
    },
    ...config.mountOptions
  })
}

describe('EventList.vue', () => {
  it('renders events list successfully', () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    })

    expect(wrapper.exists()).toBeTruthy()

    const title = wrapper.get('[data-testid="event-list-title"]')
    expect(title.exists()).toBeTruthy()
    expect(title.text()).toContain('Events for Good')
  })

  describe('events', () => {
    it('are rendered in a list', () => {
      const wrapper = mountEventList()
      const events = wrapper.findAll('[data-testid=event]')
    })
  })
})
