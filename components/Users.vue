<template>
  <div>
    <v-card>
      <v-list>
        <v-subheader>
          Users
        </v-subheader>
        <v-list-item-group>
          <v-list-item
            v-for="(user, i) in users"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="'mdi-account'"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="user.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>

export default {
  props: {
    users: {
      type: Array
    },
  },
  data() {
    return {}
  },
  computed: {

  },
  methods: {

  }
}

</script>
