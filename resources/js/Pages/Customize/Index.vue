<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
<<<<<<< HEAD
import { ref, onMounted, reactive, computed } from "vue";
import axios from "axios"; // Import Axios
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
import VLazyImage from "v-lazy-image";

defineProps({
  avatar: Object as () => Record<string, unknown>,
});

const colors = usePage().props.colors;

var userAvatar = reactive({
  color_head: computed(() => (usePage<any>().props.avatar as Record<string, unknown>).color_head),
  color_torso: computed(() => (usePage<any>().props.avatar as Record<string, unknown>).color_torso),
  color_left_arm: computed(() => (usePage<any>().props.avatar as Record<string, unknown>).color_left_arm),
  color_right_arm: computed(() => (usePage<any>().props.avatar as Record<string, unknown>).color_right_arm),
  color_left_leg: computed(() => (usePage<any>().props.avatar as Record<string, unknown>).color_left_leg),
  color_right_leg: computed(() => (usePage<any>().props.avatar as Record<string, unknown>).color_right_leg),
  image: (usePage<any>().props.avatar as Record<string, unknown>).thumbnail,
},
);

const wearItem = () => {
  // Define the data to send to your PHP endpoint
  const requestData = {
    action: "wear", // Replace with the desired action
    id: 1, // Replace with the item ID you want to wear
    // Add other data as needed
  };

  // Make an Axios POST request to your PHP endpoint
  axios
    .post("/your-php-endpoint-url", requestData)
    .then((response) => {
      // Handle the response from the server
      console.log(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};
=======
import { ref, onMounted, nextTick, computed } from "vue";
import axios from "axios"; // Import Axios
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018

const selectedPart = ref<string | null>(null);
const selectedColor = ref<string | null>(null); // Initialize with a default color, e.g., white

const VrcRequest = ref(false); // Initialize as false
const imageRefreshKey = ref(0); // Initialize with 0

<<<<<<< HEAD
let thumbnail = "";


=======
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
// Function to show a modal by toggling its "active" class
function showModal(modalId: string): void {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.toggle("active");
  }
}

// Mapping of internal part names to user-friendly names
const partNames = {
  head: "Head",
  left_arm: "Left Arm",
  torso: "Torso",
  right_arm: "Right Arm",
  left_leg: "Left Leg",
  right_leg: "Right Leg",
};

// Function to submit the selected part's color to the API

function VRCReset(): Promise<void> {
  VrcRequest.value = true;
  const requestData = {
    action: "reset",
  };
  axios
    .post(route(`avatar.update`), requestData)
    .then((response) => {
      // Handle the response from the server
      console.log(response.data);
      imageRefreshKey.value += 1;
<<<<<<< HEAD
      thumbnail = response.data;
      VrcRequest.value = false;

    })
    .catch((error) => {
      VrcRequest.value = false;

=======
      VrcRequest.value = false;
    })
    .catch((error) => {
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
      // Handle any errors
      console.error(error);
    });
  console.log(`Resetting`);
<<<<<<< HEAD

}

// Function to change the color of a body part
function changeColor(color: string, part: string): Promise<void> {
  if (!part) {
    console.error('Part is null or undefined');
    return Promise.reject('Part is null or undefined');
  } else {
    console.log(part);
  }

  VrcRequest.value = true;
  const requestData = {
    action: 'color',
    body_part: part,
    color: color,
  };

  axios.post(route(`avatar.update`), requestData)
    .then((response) => {
      // Handle the response from the server
      imageRefreshKey.value += 1;
      thumbnail = response.data;
      selectedColor.value = color;
      VrcRequest.value = false;

=======
}

let thumbnail = "";

async function getAvatar() {
  VrcRequest.value = true;

  try {
    const response = await axios.get(route(`api.thumbnails`, { type: 2, id: usePage().props.auth.user.id }), { maxRedirects: 0 });

    // Check if there's a 'location' header in the response headers
    const redirectURL = response.headers['location'];

    if (redirectURL) {
      // The 'location' header contains the final CDN link
      thumbnail = redirectURL;
      console.log(thumbnail);
    } else {
      console.error("No redirection URL found in the response headers.");
    }

    VrcRequest.value = false;
  } catch (error) {
    VrcRequest.value = false;
    console.error(error);
  }
}

// Function to change the color of a body part
function changeColor(
  color: string,
  part: string,
): Promise<void> {
  VrcRequest.value = true;
  const requestData = {
    action: "color",
    body_part: part,
    color: color,
  };
  axios
    .post(route(`avatar.update`), requestData)
    .then((response) => {
      // Handle the response from the server
      console.log(response.data);
      imageRefreshKey.value += 1;
      VrcRequest.value = false;
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
    })
    .catch((error) => {
      VrcRequest.value = false;
      // Handle any errors
      console.error(error);
    });
<<<<<<< HEAD

  const updatedUserAvatar = { ...userAvatar };
  if (part === 'head') {
    updatedUserAvatar.color_head = color;
  } else if (part === 'left_arm') {
    updatedUserAvatar.color_left_arm = color;
  } else if (part === 'torso') {
    updatedUserAvatar.color_torso = color;
  } else if (part === 'right_arm') {
    updatedUserAvatar.color_right_arm = color;
  } else if (part === 'left_leg') {
    updatedUserAvatar.color_left_leg = color;
  } else {
    updatedUserAvatar.color_right_leg = color;
  }
  userAvatar = updatedUserAvatar;


  console.log(`Changing ${part} color to: ${color}`);

}



=======
  console.log(`Changing ${part} color to: ${color}`);
}

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
// Function to select a body part
function selectPart(part: string): void {
  selectedPart.value = part;
}
function setColor(color: string): void {
  selectedColor.value = color;
}

function handlePartSelection(part: string): void {
  showModal("PartsModal");
  selectPart(part);
}
<<<<<<< HEAD
const getAllItems = async () => {
  try {
    const response = await axios.get('https://your-api-url/all-items');
    const items = response.data;
    return items;
  } catch (error) {
    console.error('Error fetching all items:', error);
    return [];
  }
};

const getCurrentlyWearingItems = async () => {
  try {
    const response = await axios.get('https://your-api-url/currently-wearing-items');
    const wearingItems = response.data;
    return wearingItems;
  } catch (error) {
    console.error('Error fetching currently wearing items:', error);
    return [];
  }
};

const combineData = (allItems, wearingItems) => {
  const combinedData = allItems.map((item) => {
    const isWearing = wearingItems.includes(item.id);
    return { ...item, isWearing };
  });
  return combinedData;
};

(async () => {
  const allItems = await getAllItems();
  const wearingItems = await getCurrentlyWearingItems();
  const combinedData = combineData(allItems, wearingItems);
  console.log('Combined data:', combinedData);
})();
</script>
=======
onMounted(() => {
getAvatar();
});
</script>

>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
<template>
  <Navbar />
  <Sidebar>
    <div class="modal" id="PartsModal">
      <div class="modal-card modal-card-body modal-card-sm">
        <div class="section-borderless">
          <div class="gap-2 align-middle flex-container align-justify">
            <div v-if="selectedPart" class="text-lg fw-semibold">
              Change {{ partNames[selectedPart] }} Color
            </div>
            <div v-else class="text-lg fw-semibold">
              Select a part to change its color
            </div>
<<<<<<< HEAD
            <button @click="showModal('PartsModal')" class="btn-circle" data-toggle-modal="#PartsModal"
              style="margin-right: -10px">
=======
            <button
              @click="showModal('PartsModal')"
              class="btn-circle"
              data-toggle-modal="#PartsModal"
              style="margin-right: -10px"
            >
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="section-borderless grid-x mr-2">
<<<<<<< HEAD
          <div class="mr-2" v-for="(color, index) in colors" :key="index">
            <div class="ColorPickerItem" @click="setColor(color)" :class="{
              active:
                selectedColor === color ||
                userAvatar[`color_${selectedPart}`] === color,
            }" :style="{
  backgroundColor: '#' + color,
  display: 'inline-block',
  width: '32px',
  height: '32px',
}"></div>
=======
          <div class="mr-2" v-for="(color, info) in colors" :key="info.name">
            <div
              class="ColorPickerItem"
	      @click="setColor(color)"
              :class="{
                active:
                  selectedColor === color ||
                  userAvatar[`color_${selectedPart}`] === color,
              }"
              :style="{
                backgroundColor: '#' + color,
                display: 'inline-block',
                width: '32px',
                height: '32px',
              }"
            ></div>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
          </div>
          <div class="text-xs text-muted fw-semibold">
            After changing your avatar part your avatar will rerender with the
            changes applied.
          </div>
<<<<<<< HEAD
          <div class="flex-wrap gap-2 flex-container justify-content-end section-borderless">
            <button class="btn btn-secondary" @click="showModal('PartsModal')">
              Cancel
            </button>
            <input v-if="selectedPart && !VrcRequest" @click="changeColor(selectedColor, selectedPart)" type="submit"
              class="btn btn-success" value="Submit" />
=======
          <div
            class="flex-wrap gap-2 flex-container justify-content-end section-borderless"
          >
            <button class="btn btn-secondary" @click="showModal('PartsModal')">
              Cancel
            </button>
            <input
              v-if="selectedPart && !VrcRequest"
              @click="changeColor(selectedColor, selectedPart)"
              type="submit"
              class="btn btn-success"
              value="Submit"
            />
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
          </div>
        </div>
      </div>
    </div>
    <div class="cell medium-3">
      <div class="mb-3 card card-body">
<<<<<<< HEAD
        <div id="avatarDiv">
          <v-lazy-image :src="thumbnail" :src-placeholder="userAvatar.image"
            style="display:block;margin:0 auto!important;" />
          <div v-if="VrcRequest" id="avatar-loading"
            style="width: inherit; height: inherit; visibility: none; position: absolute; inset: 0px; background-color: rgba(0, 0, 0, 0.58); display: inline-grid; justify-content: center; align-items: center;">
            <i class="fa-duotone fa-spinner flex-container flex-dir-column align-middle justify-center text-center text-info text-3xl"
              style="animation-iteration-count: infinite;animation-timing-function: linear;animation-name: spin;animation-duration: 0.7s;font-size:3em"></i>
          </div>
        </div>
        <div class="min-w-0 gap-2 mt-3 flex-container">
          <button @click="VRCReset()" class="btn btn-danger btn-sm text-truncate w-100">
=======
        <img
          v-if="!VrcRequest"
          :src="`${thumbnail}?refresh=${imageRefreshKey}`"
        />
        <img v-else width="512" height="512" src="assets/spinner/pulse.svg" />

        <div class="min-w-0 gap-2 mt-3 flex-container">
          <button
            @click="VRCReset()"
            class="btn btn-danger btn-sm text-truncate w-100"
          >
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
            Reset
          </button>
          <button class="btn btn-info btn-sm text-truncate w-100">
            Random
          </button>
        </div>
      </div>
      <div class="text-center">
        <div class="card card-body">
          <div style="margin-bottom:2.5px;">
<<<<<<< HEAD
            <button class="avatar-body-part" id="head" :style="{
              backgroundColor: '#' + userAvatar.color_head,
              padding: '5px',
              borderRadius: '15px',
              marginTop: '-1px',
            }" @click="handlePartSelection('head')">
              <img src="https://cdn.netisu.com/uploads/default.png" width="50" height="50">
            </button>
          </div>
          <div style="margin-bottom:2.5px;">
            <button class="avatar-body-part" id="left_arm" :style="{
              backgroundColor: '#' + userAvatar.color_left_arm,
              padding: '50px',
              paddingRight: '0px',
            }" @click="handlePartSelection('left_arm')"></button>

            <button class="avatar-body-part" id="torso" :style="{
              backgroundColor: '#' + userAvatar.color_torso,
              padding: '50px',
            }" @click="handlePartSelection('torso')"></button>

            <button class="avatar-body-part" id="right_arm" :style="{
              backgroundColor: '#' + userAvatar.color_right_arm,
              padding: '50px',
              paddingRight: '0px',
            }" @click="handlePartSelection('right_arm')"></button>
          </div>
          <div>
            <button class="avatar-body-part" name="left_leg" @click="handlePartSelection('left_leg')" :style="{
              backgroundColor: '#' + userAvatar.color_left_leg,
              padding: '50px',
              paddingRight: '0px',
              paddingLeft: '47px',
            }"></button>

            <button class="avatar-body-part" name="right_leg" @click="handlePartSelection('right_leg')" :style="{
              backgroundColor: '#' + userAvatar.color_right_leg,
              padding: '50px',
              paddingRight: '0px',
              borderBottom: '15px',
              paddingLeft: '47px',
            }"></button>
=======
            <button
              class="avatar-body-part"
              id="Head"
              :style="{
                backgroundColor: '#' + userAvatar.color_head,
                padding: '25px',
                borderRadius: '15px',
                marginTop: '-1px',
              }"
              @click="handlePartSelection('head')"
            ></button>
          </div>
          <div style="margin-bottom:2.5px;">
            <button
              class="avatar-body-part"
              id="Left-Arm"
              :style="{
                backgroundColor: '#' + userAvatar.color_left_arm,
                padding: '50px',
                paddingRight: '0px',
              }"
              @click="handlePartSelection('left_arm')"
            ></button>

            <button
              class="avatar-body-part"
              id="Torso"
              :style="{
                backgroundColor: '#' + userAvatar.color_torso,
                padding: '50px',
              }"
              @click="handlePartSelection('torso')"
            ></button>

            <button
              class="avatar-body-part"
              id="Right-Arm"
              :style="{
                backgroundColor: '#' + userAvatar.color_right_arm,
                padding: '50px',
                paddingRight: '0px',
              }"
              @click="handlePartSelection('right_arm')"
            ></button>
          </div>
          <div>
            <button
              class="avatar-body-part"
              name="Left Leg"
              @click="handlePartSelection('left_leg')"
              :style="{
                backgroundColor: '#' + userAvatar.color_left_leg,
                padding: '50px',
                paddingRight: '0px',
                paddingLeft: '47px',
              }"
            ></button>

            <button
              class="avatar-body-part"
              name="Right Leg"
              @click="handlePartSelection('right_leg')"
              :style="{
                backgroundColor: '#' + userAvatar.color_right_leg,
                padding: '50px',
                paddingRight: '0px',
                borderBottom: '15px',
                paddingLeft: '47px',
              }"
            ></button>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
          </div>
        </div>
      </div>
    </div>
    <div class="cell medium-8">
      <div class="mb-1 align-middle flex-container align-justify">
        <div class="mb-1 text-xl fw-semibold">Inventory</div>
      </div>
      <div class="mb-3 card card-body">
        <div class="gap-3 text-center flex-container flex-dir-column">
<<<<<<< HEAD
          <div v-if="userAvatar.items" class="grid-x grid-margin-x grid-padding-y">
            <div v-for="item in userAvatar.items" class="cell large-3 medium-3 small-6"><a class="d-block"
                href="https://netisu.test/market/item/1">
                <div class="p-2 mb-1 card card-item position-relative">

                  <div style="position: absolute; bottom: 10px; left: 10px;"></div>
                  <div style="position: absolute; top: 10px; right: 10px;">
                    <div class="mb-1 badge badge-success fw-semibold"><i class="fas fa-plus" style="width: 18px;"></i>Wear
                    </div>
                    <div class="mb-1 badge badge-danger fw-semibold"><i class="fas fa-minus"
                        style="width: 18px;"></i>Remove</div>
                  </div><img src="/assets/img/item_dummy_4.png">
                </div>
                <div class="text-body fw-semibold text-truncate">{{ item.hats.hat_1 }}</div>
              </a>
            </div>
          </div>
          <i v-else class="text-5xl fas fa-wand-magic-sparkles text-muted"></i>
=======
          <i class="text-5xl fas fa-wand-magic-sparkles text-muted"></i>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
          <div style="line-height: 16px">
            <div class="text-xs fw-bold text-muted text-uppercase">
              No Items.
            </div>
            <div class="text-xs text-muted fw-semibold">
              You are not wearing any items.
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 card card-body">
        <div class="section">
          <ul class="tabs">
            <li class="tab-item">
              <a href="#" class="tab-link active squish">Hats</a>
            </li>
            <li class="tab-item">
              <a href="#" class="tab-link squish">Shirts</a>
            </li>
            <li class="tab-item">
              <a href="#" class="tab-link squish">Accessories</a>
            </li>
            <li class="tab-item">
              <a href="#" class="tab-link squish">Pants</a>
            </li>
            <li class="tab-item">
              <a href="#" class="tab-link squish">Heads</a>
            </li>
          </ul>
        </div>
        <div class="section">
          <div class="gap-3 text-center flex-container flex-dir-column">
            <i class="text-5xl fas fa-crate-apple text-muted"></i>
            <div style="line-height: 16px">
              <div class="text-xs fw-bold text-muted text-uppercase">
                No insert_category_name_here
              </div>
              <div class="text-xs text-muted fw-semibold">
                You have no items in the category.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Sidebar>
  <Footer />
  <!--
    {{ AVATAR CLASSES }}
    Body Colors:
    {{ userAvatar.color_head }}
    {{ userAvatar.color_torso }}
    {{ userAvatar.color_left_arm }}
    {{ userAvatar.color_right_arm }}
    {{ userAvatar.color_left_leg }}
    {{ userAvatar.color_right_leg }}

    Items: [
        Hats [
    {{ userAvatar.items[0].hats.hat_1 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_2 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_3 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_4 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_5 ?? 'none' }}
    {{ userAvatar.items[0].hats.hat_6 ?? 'none' }}
],
    {{ userAvatar.items[0].face ?? 'none' }}
    {{ userAvatar.items[0].gear ?? 'none' }}
    {{ userAvatar.items[0].shirt ?? 'none' }}
    {{ userAvatar.items[0].pants ?? 'none' }}

    ];
!-->
<<<<<<< HEAD
</template>
=======
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    avatar: {
      type: Object as () => Record<string, unknown>,
      required: true,
    },
  },
  methods: {
    wearItem() {
      // Define the data to send to your PHP endpoint
      const requestData = {
        action: "wear", // Replace with the desired action
        id: 1, // Replace with the item ID you want to wear
        // Add other data as needed
      };

      // Make an Axios POST request to your PHP endpoint
      axios
        .post("/your-php-endpoint-url", requestData)
        .then((response) => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    },
  },
  data() {
    return {
      colors: this.$page.props.colors,
      userAvatar: {
        color_head: (this.avatar as Record<string, unknown>)
          .color_head as string,
        color_torso: (this.avatar as Record<string, unknown>)
          .color_torso as string,
        color_left_arm: (this.avatar as Record<string, unknown>)
          .color_left_arm as string,
        color_right_arm: (this.avatar as Record<string, unknown>)
          .color_right_arm as string,
        color_left_leg: (this.avatar as Record<string, unknown>)
          .color_left_leg as string,
        color_right_leg: (this.avatar as Record<string, unknown>)
          .color_right_leg as string,
        image: (this.avatar as Record<string, unknown>).thumbnail as string,
        items: [
          {
            hats: {
              hat_1: (this.avatar as Record<string, unknown>).hat_1 as string,
              hat_2: (this.avatar as Record<string, unknown>).hat_2 as string,
              hat_3: (this.avatar as Record<string, unknown>).hat_3 as string,
              hat_4: (this.avatar as Record<string, unknown>).hat_4 as string,
              hat_5: (this.avatar as Record<string, unknown>).hat_5 as string,
              hat_6: (this.avatar as Record<string, unknown>).hat_6 as string,
            },
            face: (this.avatar as Record<string, unknown>).face as string,
            gear: (this.avatar as Record<string, unknown>).gear as string,
            shirt: (this.avatar as Record<string, unknown>).shirt as string,
            pants: (this.avatar as Record<string, unknown>).pants as string,
          },
        ],
      },
    };
  },
});
</script>
>>>>>>> 39a8b60fc9187ffe8bbc9f31cd7ca7b112b96018
