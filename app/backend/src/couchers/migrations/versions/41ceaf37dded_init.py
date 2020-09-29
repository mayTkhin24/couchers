"""Init

Revision ID: 41ceaf37dded
Revises: 
Create Date: 2020-09-29 11:48:20.102336

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '41ceaf37dded'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('conversations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('emails',
    sa.Column('id', sa.String(), nullable=False),
    sa.Column('time', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('sender_name', sa.String(), nullable=False),
    sa.Column('sender_email', sa.String(), nullable=False),
    sa.Column('recipient', sa.String(), nullable=False),
    sa.Column('subject', sa.String(), nullable=False),
    sa.Column('plain', sa.String(), nullable=False),
    sa.Column('html', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('signup_tokens',
    sa.Column('token', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('expiry', sa.DateTime(timezone=True), nullable=False),
    sa.PrimaryKeyConstraint('token')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('hashed_password', sa.LargeBinary(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('phone_status', sa.Enum('unverified', 'verified', name='phonestatus'), nullable=True),
    sa.Column('joined', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('last_active', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('city', sa.String(), nullable=False),
    sa.Column('gender', sa.String(), nullable=False),
    sa.Column('birthdate', sa.Date(), nullable=False),
    sa.Column('full_name', sa.String(), nullable=True),
    sa.Column('hosting_status', sa.Enum('can_host', 'maybe', 'difficult', 'cant_host', name='hostingstatus'), nullable=True),
    sa.Column('verification', sa.Float(), nullable=True),
    sa.Column('community_standing', sa.Float(), nullable=True),
    sa.Column('occupation', sa.String(), nullable=True),
    sa.Column('about_me', sa.String(), nullable=True),
    sa.Column('about_place', sa.String(), nullable=True),
    sa.Column('color', sa.String(), nullable=False),
    sa.Column('avatar_filename', sa.String(), nullable=True),
    sa.Column('languages', sa.String(), nullable=True),
    sa.Column('countries_visited', sa.String(), nullable=True),
    sa.Column('countries_lived', sa.String(), nullable=True),
    sa.Column('is_banned', sa.Boolean(), nullable=False),
    sa.Column('max_guests', sa.Integer(), nullable=True),
    sa.Column('multiple_groups', sa.Boolean(), nullable=True),
    sa.Column('last_minute', sa.Boolean(), nullable=True),
    sa.Column('accepts_pets', sa.Boolean(), nullable=True),
    sa.Column('accepts_kids', sa.Boolean(), nullable=True),
    sa.Column('wheelchair_accessible', sa.Boolean(), nullable=True),
    sa.Column('smoking_allowed', sa.Enum('yes', 'window', 'outside', 'no', name='smokinglocation'), nullable=True),
    sa.Column('sleeping_arrangement', sa.String(), nullable=True),
    sa.Column('area', sa.String(), nullable=True),
    sa.Column('house_rules', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('username')
    )
    op.create_table('complaints',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('time', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('author_user_id', sa.Integer(), nullable=False),
    sa.Column('reported_user_id', sa.Integer(), nullable=False),
    sa.Column('reason', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['author_user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['reported_user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('friend_relationships',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('from_user_id', sa.Integer(), nullable=False),
    sa.Column('to_user_id', sa.Integer(), nullable=False),
    sa.Column('status', sa.Enum('pending', 'accepted', 'rejected', 'cancelled', name='friendstatus'), nullable=False),
    sa.Column('time_sent', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('time_responded', sa.DateTime(timezone=True), nullable=True),
    sa.ForeignKeyConstraint(['from_user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['to_user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('group_chats',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('only_admins_invite', sa.Boolean(), nullable=False),
    sa.Column('creator_id', sa.Integer(), nullable=False),
    sa.Column('is_dm', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['creator_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['id'], ['conversations.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('initiated_uploads',
    sa.Column('key', sa.String(), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('expiry', sa.DateTime(timezone=True), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('key')
    )
    op.create_table('login_tokens',
    sa.Column('token', sa.String(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('created', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('expiry', sa.DateTime(timezone=True), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('token')
    )
    op.create_table('messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('conversation_id', sa.Integer(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.Column('time', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('text', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['conversation_id'], ['conversations.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('references',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('time', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('from_user_id', sa.Integer(), nullable=False),
    sa.Column('to_user_id', sa.Integer(), nullable=False),
    sa.Column('reference_type', sa.Enum('FRIEND', 'SURFED', 'HOSTED', name='referencetype'), nullable=False),
    sa.Column('text', sa.String(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.Column('was_safe', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['from_user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['to_user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('from_user_id', 'to_user_id', 'reference_type')
    )
    op.create_table('sessions',
    sa.Column('token', sa.String(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('started', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('token')
    )
    op.create_table('group_chat_subscriptions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('group_chat_id', sa.Integer(), nullable=False),
    sa.Column('joined', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.Column('left', sa.DateTime(timezone=True), nullable=True),
    sa.Column('role', sa.Enum('admin', 'participant', name='groupchatrole'), nullable=False),
    sa.Column('last_seen_message_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['group_chat_id'], ['group_chats.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('host_requests',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('from_user_id', sa.Integer(), nullable=False),
    sa.Column('to_user_id', sa.Integer(), nullable=False),
    sa.Column('from_date', sa.String(), nullable=False),
    sa.Column('to_date', sa.String(), nullable=False),
    sa.Column('status', sa.Enum('pending', 'accepted', 'rejected', 'confirmed', 'cancelled', name='hostrequeststatus'), nullable=False),
    sa.Column('conversation_id', sa.Integer(), nullable=False),
    sa.Column('initial_message_id', sa.Integer(), nullable=False),
    sa.Column('to_last_seen_message_id', sa.Integer(), nullable=False),
    sa.Column('from_last_seen_message_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['conversation_id'], ['conversations.id'], ),
    sa.ForeignKeyConstraint(['from_user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['initial_message_id'], ['messages.id'], ),
    sa.ForeignKeyConstraint(['to_user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('host_request_events',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('host_request_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('event_type', sa.Enum('created', 'status_change_accepted', 'status_change_rejected', 'status_change_confirmed', 'status_change_cancelled', name='hostrequesteventtype'), nullable=False),
    sa.Column('after_message_id', sa.Integer(), nullable=False),
    sa.Column('time', sa.DateTime(timezone=True), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=False),
    sa.ForeignKeyConstraint(['host_request_id'], ['host_requests.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('host_request_events')
    op.drop_table('host_requests')
    op.drop_table('group_chat_subscriptions')
    op.drop_table('sessions')
    op.drop_table('references')
    op.drop_table('messages')
    op.drop_table('login_tokens')
    op.drop_table('initiated_uploads')
    op.drop_table('group_chats')
    op.drop_table('friend_relationships')
    op.drop_table('complaints')
    op.drop_table('users')
    op.drop_table('signup_tokens')
    op.drop_table('emails')
    op.drop_table('conversations')
    # ### end Alembic commands ###
