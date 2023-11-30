Vue.component('timeline', {
  props: ['events'],
  data() {
    return {
      expandedEventIndex: -1,
    };
  },
  methods: {
    toggleDescription(index) {
      this.expandedEventIndex = this.expandedEventIndex === index ? -1 : index;
    },
  },
  template: `
    <div class="timeline">
      <div v-for="(event, index) in sortedEvents" :key="event.title" class="timeline-event" @click="toggleDescription(index)">
        <div class="event-info">
          <h3>{{ event.title }}</h3>
          <p class="event-date">{{ event.date }}</p>
          <transition name="fade">
            <p v-if="expandedEventIndex === index" class="event-description">{{ event.description }}</p>
          </transition>
        </div>
      </div>
    </div>
  `,
  computed: {
    sortedEvents() {
      return this.events.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    },
  },
});
