<script setup lang="ts">
import Navbar from "@/Components/LayoutParts/Navbar.vue";
import Sidebar from "@/Components/LayoutParts/Sidebar.vue";
import Footer from "@/Components/LayoutParts/Footer.vue";
import { ref, onMounted, nextTick, computed } from "vue";
import axios from "axios"; // Import Axios
import { route } from "momentum-trail";
import { usePage } from "@inertiajs/vue3";

const selectedPart = ref<string | null>(null);
const selectedColor = ref<string | null>(null); // Initialize with a default color, e.g., white

const VrcRequest = ref(false); // Initialize as false
const imageRefreshKey = ref(0); // Initialize with 0

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
      VrcRequest.value = false;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
  console.log(`Resetting`);
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
    })
    .catch((error) => {
      VrcRequest.value = false;
      // Handle any errors
      console.error(error);
    });
  console.log(`Changing ${part} color to: ${color}`);
}

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
onMounted(() => {
getAvatar();
});
</script>

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
            <button
              @click="showModal('PartsModal')"
              class="btn-circle"
              data-toggle-modal="#PartsModal"
              style="margin-right: -10px"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="section-borderless grid-x mr-2">
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
          </div>
          <div class="text-xs text-muted fw-semibold">
            After changing your avatar part your avatar will rerender with the
            changes applied.
          </div>
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
          </div>
        </div>
      </div>
    </div>
    <div class="cell medium-3">
      <div class="mb-3 card card-body">
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
          <i class="text-5xl fas fa-wand-magic-sparkles text-muted"></i>
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
