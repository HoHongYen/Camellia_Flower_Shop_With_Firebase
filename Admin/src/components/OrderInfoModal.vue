
<template>
	<!-- Modal Begin -->
	<div v-if="showOrderInfoModal"
		:height = "auto"
		:scrollable = "true"
		:adaptive="true"
	>
		<transition name="modal">
		<div class="modal-mask modal">
			<div class="modal-wrapper" tabindex="-1" role="dialog" data-replace="true">
			<div class="modal-dialog " role="document">

				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLongTitle">Chi tiết đơn hàng</h5>
					<button type="button" @click="showOrderInfoModal = false" class="close rounded-3" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">


					<OrderItem
						:order="order"
					>
					</OrderItem>


				</div>
				<div class="modal-footer">
					<button type="button" @click="showOrderInfoModal = false" class="close-btn btn btn-secondary custom-btn-primary" data-dismiss="modal">Đóng</button>
				</div>
				</div>
			</div>
			</div>
		</div>
		</transition>

	</div>
	<!-- Modal End -->
</template>

<script>
import OrderItem from '@/components/OrderItem.vue';

export default {
    name: 'OrderInfoModal',
	props: ['showOrderInfoModal', 'order'],
	components: {
		OrderItem,
	},
	data() {
		return {
		}
	},
	computed: {

    },
	methods: {
	}
}
</script>

<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-dialog {
		max-width: 60%;
	}

	.modal-footer {
		border: none;
		justify-content: center;
	}

	.modal-body {
		margin-top: 12px;
	}

	#img-wrap {
        text-align: center;
    }

    img {
        width: 250px;
    }

</style>

